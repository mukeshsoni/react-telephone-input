// TODO - fix the onlyCountries props. Currently expects that as an array of country object, but users should be able to send in array of country isos
import React, { Component } from 'react'
import onClickOutside from 'react-onclickoutside'
import {
  some,
  find,
  reduce,
  map,
  filter,
  findIndex,
  first,
  tail,
  debounce,
  memoize,
  assign,
  isEqual,
  startsWith,
  trim
} from 'lodash'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { allCountries, iso2Lookup, allCountryCodes } from 'country-telephone-data'

var isModernBrowser = true

if (typeof document !== 'undefined') {
  var isModernBrowser = Boolean(document.createElement('input').setSelectionRange);
}

const keys = {
    UP: 38,
    DOWN: 40,
    RIGHT: 39,
    LEFT: 37,
    ENTER: 13,
    ESC: 27,
    PLUS: 43,
    A: 65,
    Z: 90,
    SPACE: 32
};

const isNumberValid = (inputNumber) => {
    return some(allCountries, function(country) {
        return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
    });
}

class ReactTelephoneInput extends Component
{
    constructor(props) {
      super(props)

      const preferredCountries = props.preferredCountries.map(
        iso2 => iso2Lookup.hasOwnProperty(iso2) ? allCountries[iso2Lookup[iso2]] : null
      ).filter(value => value != null)

      this.state = {
        preferredCountries,
        showDropDown: false,
        queryString: '',
        freezeSelection: false,
        ...this._mapPropsToState(props, true)
      }

      this.flags = []
    }

    getNumber() {
        const { formattedNumber } = this.state
        return formattedNumber !== '+' ? formattedNumber : '';
    }

    getValue() {
        return this.getNumber()
    }

    componentDidMount() {
        const { formattedNumber, selectedCountry } = this.state
        document.addEventListener('keydown', e => this.handleKeydown(e))

        this._cursorToEnd(true);
        this.props.onChange(formattedNumber, selectedCountry);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state);
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this._mapPropsToState(nextProps));
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', e => this.handleKeydown(e));
    }

    scrollTo(country, middle) {
        middle = middle || false
        if(!country) {
            return;
        }

        const container = this.flagsDropdownList

        if(!container) {
          return;
        }

        const containerHeight = container.offsetHeight;
        const containerOffset = container.getBoundingClientRect();
        const containerTop = containerOffset.top + document.body.scrollTop;
        const containerBottom = containerTop + containerHeight;

        const element = country
        const elementOffset = element.getBoundingClientRect();
        const elementHeight = element.offsetHeight;
        const elementTop = elementOffset.top + document.body.scrollTop;
        const elementBottom = elementTop + elementHeight;
        let newScrollTop = elementTop - containerTop + container.scrollTop;
        const middleOffset = (containerHeight / 2) - (elementHeight / 2);

        if (elementTop < containerTop) {
            // scroll up
            if (middle) {
                newScrollTop -= middleOffset;
            }
            container.scrollTop = newScrollTop;
        } else if (elementBottom > containerBottom) {
            // scroll down
            if(middle) {
                newScrollTop += middleOffset;
            }
            const heightDifference = containerHeight - elementHeight;
            container.scrollTop = newScrollTop - heightDifference;
        }
    }

    formatNumber(text, pattern) {
        if(!text || text.length === 0) {
            return '+';
        }

        // for all strings with length less than 3, just return it (1, 2 etc.)
        // also return the same text if the selected country has no fixed format
        if((text && text.length < 2) || !pattern || !this.props.autoFormat) {
            return `+${text}`;
        }

        var formattedObject = reduce(pattern, function(acc, character) {
            if(acc.remainingText.length === 0) {
                return acc;
            }

            if(character !== '.') {
                return {
                    formattedText: acc.formattedText + character,
                    remainingText: acc.remainingText
                };
            }

            return {
                formattedText: acc.formattedText + first(acc.remainingText),
                remainingText: tail(acc.remainingText)
            };
        }, {formattedText: '', remainingText: text.split('')});
        return formattedObject.formattedText + formattedObject.remainingText.join('');
    }

    // put the cursor to the end of the input (usually after a focus event)
    _cursorToEnd(skipFocus) {
        const { numberInput: input } = this
        if (skipFocus) {
            this._fillDialCode();
        } else {
            input.focus();

            if (isModernBrowser) {
                const { value: { length: len } } = input
                input.setSelectionRange(len, len);
            }
        }
    }

    // memoize results based on the first 5/6 characters. That is all that matters
    guessSelectedCountry(inputNumber) {
        const secondBestGuess = find(allCountries, { iso2: this.props.defaultCountry }) || this.props.onlyCountries[0];
        const inputNumberForCountries = inputNumber.substr(0, 4);

        if (trim(inputNumber) !== '') {
            var bestGuess = reduce(this.props.onlyCountries, function (selectedCountry, country) {

                // if the country dialCode exists WITH area code

                if (allCountryCodes[inputNumberForCountries] && allCountryCodes[inputNumberForCountries][0] === country.iso2) {
                    return country;

                // if the selected country dialCode is there with the area code

                } else if (allCountryCodes[inputNumberForCountries] && allCountryCodes[inputNumberForCountries][0] === selectedCountry.iso2) {
                    return selectedCountry;

                // else do the original if statement
                } else {
                    if (startsWith(inputNumber, country.dialCode)) {
                        if (country.dialCode.length > selectedCountry.dialCode.length) {
                            return country;
                        }
                        if (country.dialCode.length === selectedCountry.dialCode.length && country.priority < selectedCountry.priority) {
                            return country;
                        }
                    }
                }
                return selectedCountry;
            }, { dialCode: '', priority: 10001 }, this);
        } else {
            return secondBestGuess;
        }

        if(!bestGuess.name) {
            return secondBestGuess;
        }

        return bestGuess;
    }

    getElement(index) {
        return this.flags[index]
    }

    handleFlagDropdownClick() {
        const { disabled, onlyCountries } = this.props
        const { showDropDown, selectedCountry, preferredCountries, highlightCountryIndex } = this.state
        if (disabled) {
          return;
        }
        // need to put the highlight on the current selected country if the dropdown is going to open up
        this.setState({
            showDropDown: !this.state.showDropDown,
            highlightCountry: find(onlyCountries, selectedCountry),
            highlightCountryIndex: findIndex(preferredCountries.concat(onlyCountries), selectedCountry)
        }, () => {
            // only need to scrool if the dropdown list is alive
            if(!showDropDown) {
                this.scrollTo(this.getElement(this.state.highlightCountryIndex + preferredCountries.length));
            }
        });
    }

    handleInput(event) {
        const { selectedCountry } = this.state
        let { selectedCountry: newSelectedCountry, freezeSelection } = this.state
        let formattedNumber = '+'

        // if the input is the same as before, must be some special key like enter etc.
        if(event.target.value === this.state.formattedNumber) {
            return;
        }

        // ie hack
        if(event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        if(event.target.value.length > 0) {
            // before entering the number in new format, lets check if the dial code now matches some other country
            const inputNumber = event.target.value.replace(/\D/g, '');

            // we don't need to send the whole number to guess the country... only the first 6 characters are enough
            // the guess country function can then use memoization much more effectively since the set of input it gets has drastically reduced
            if(!freezeSelection || selectedCountry.dialCode.length > inputNumber.length) {
                newSelectedCountry = this.guessSelectedCountry(inputNumber.substring(0, 6));
                freezeSelection = false;
            }
            // let us remove all non numerals from the input
            formattedNumber = this.formatNumber(inputNumber, newSelectedCountry.format);
        }

        let caretPosition = event.target.selectionStart;
        const oldFormattedText = this.state.formattedNumber;
        const diff = formattedNumber.length - oldFormattedText.length;

        this.setState({
            formattedNumber,
            freezeSelection,
            selectedCountry: newSelectedCountry.dialCode.length > 0 ? newSelectedCountry : selectedCountry
        }, function() {
            if(isModernBrowser) {
                if((caretPosition === 1) && (formattedNumber.length === 2)) {
                    caretPosition++;
                }

                if(diff > 0) {
                    caretPosition = caretPosition - diff;
                }

                if(caretPosition > 0 && oldFormattedText.length >= formattedNumber.length) {
                    this.numberInput.setSelectionRange(caretPosition, caretPosition);
                }
            }

            if(this.props.onChange) {
                this.props.onChange(formattedNumber, this.state.selectedCountry);
            }
        });

    }

    handleInputClick() {
        this.setState({ showDropDown: false });
    }

    handleFlagItemClick(country) {
        const { selectedCountry: currentSelectedCountry } = this.state
        const nextSelectedCountry = find(this.props.onlyCountries, country);

        // tiny optimization
        if(currentSelectedCountry.iso2 !== nextSelectedCountry.iso2) {
            var dialCodeRegex = RegExp('^(\\+' + currentSelectedCountry.dialCode + ')|\\+');
            var newNumber = this.state.formattedNumber.replace(dialCodeRegex, '+' + nextSelectedCountry.dialCode);
            var formattedNumber = this.formatNumber(newNumber.replace(/\D/g, ''), nextSelectedCountry.format);

            this.setState({
                showDropDown: false,
                selectedCountry: nextSelectedCountry,
                freezeSelection: true,
                formattedNumber: formattedNumber
            }, function() {
                this._cursorToEnd();
                if(this.props.onChange) {
                    this.props.onChange(formattedNumber, nextSelectedCountry);
                }
            });
        } else {
          this.setState({ showDropDown: false });
        }
    }

    handleInputFocus() {
        // trigger parent component's onFocus handler
        this.props.onFocus(this.state.formattedNumber, this.state.selectedCountry);

        this._fillDialCode();
    }

    _mapPropsToState(props, firstCall = false) {
        let inputNumber;

        if(props.value) {
            inputNumber = props.value
        } else if(props.initialValue && firstCall) {
            inputNumber = props.initialValue
        } else if (this.props.value){
            // just cleared the value
            inputNumber = '';
        } else if(this.state && this.state.formattedNumber && this.state.formattedNumber.length > 0) {
            inputNumber = this.state.formattedNumber
        } else {
            inputNumber = ''
        }

        const selectedCountryGuess = this.guessSelectedCountry(inputNumber.replace(/\D/g, ''));
        const selectedCountryGuessIndex = findIndex(allCountries, selectedCountryGuess);
        const formattedNumber = this.formatNumber(
            inputNumber.replace(/\D/g, ''), selectedCountryGuess ? selectedCountryGuess.format : null
        );

        return {
          selectedCountry: selectedCountryGuess,
          highlightCountryIndex: selectedCountryGuessIndex,
          formattedNumber
        }
    }

    _fillDialCode() {
        const { selectedCountry: { dialCode } } = this.state
        // if the input is blank, insert dial code of the selected country
        if(this.numberInput.value === '+') {
            this.setState({formattedNumber: '+' + dialCode});
        }
    }

    _getHighlightCountryIndex(direction) {
        const { preferredCountries } = this.state
        const { onlyCountries } = this.props
        // had to write own function because underscore does not have findIndex. lodash has it
        const highlightCountryIndex = this.state.highlightCountryIndex + direction;

        if(highlightCountryIndex < 0
            || highlightCountryIndex >= (onlyCountries.length + preferredCountries.length)) {
            return highlightCountryIndex - direction;
        }

        return highlightCountryIndex;
    }

    // memoize search results... caching all the way
    _searchCountry(queryString) {
      return memoize((queryString) => {
          const { onlyCountries } = this.props
          if(!queryString || queryString.length === 0) {
              return null;
          }
          // don't include the preferred countries in search
          const probableCountries = filter(onlyCountries, (country) => {
              return startsWith(country.name.toLowerCase(), queryString.toLowerCase());
          }, this);
          return probableCountries[0];
      })

    }

    searchCountry() {
        const { queryString, preferredCountries } = this.state
        const { onlyCountries } = this.props
        const probableCandidate = this._searchCountry(queryString) || onlyCountries[0];
        const probableCandidateIndex = findIndex(onlyCountries, probableCandidate) + preferredCountries.length;
        this.scrollTo(this.getElement(probableCandidateIndex), true);

        this.setState({
            queryString: '',
            highlightCountryIndex: probableCandidateIndex
        });
    }

    handleKeydown(event) {
        const { showDropDown, preferredCountries, highlightCountryIndex, queryString } = this.state
        const { onlyCountries } = this.props
        if(!showDropDown) {
           return;
        }

        // ie hack
        if(event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        var self = this;
        const _moveHighlight = (direction) => {
            self.setState({
                highlightCountryIndex: self._getHighlightCountryIndex(direction)
            }, () => {
                self.scrollTo(self.getElement(self.state.highlightCountryIndex), true);
            });
        }

        switch(event.which) {
            case keys.DOWN:
                    _moveHighlight(1);
                    break;
            case keys.UP:
                    _moveHighlight(-1);
                    break;
            case keys.ENTER:
                    this.handleFlagItemClick(preferredCountries.concat(onlyCountries)[highlightCountryIndex], event);
                    break;
            case keys.ESC:
                this.setState({ showDropDown: false }, this._cursorToEnd);
                break;
            default:
                if((event.which >= keys.A && event.which <= keys.Z) || event.which === keys.SPACE) {
                    this.setState({
                      queryString: queryString + String.fromCharCode(event.which)
                    }, this.state.debouncedQueryStingSearcher);
                }
        }
    }

    handleInputKeyDown(event) {
        if(event.which === keys.ENTER) {
            this.props.onEnterKeyPress(event);
        }
    }

    handleClickOutside() {
        if(this.state.showDropDown) {
            this.setState({ showDropDown: false });
        }
    }

    getCountryDropDownList() {
        const self = this
        const countryDropDownList = map(this.state.preferredCountries.concat(this.props.onlyCountries), function(country, index) {
            let itemClasses = classNames({
                country: true,
                preferred: findIndex(self.state.preferredCountries, {iso2: country.iso2}) >= 0,
                highlight: self.state.highlightCountryIndex === index
            });

            const inputFlagClasses = `flag ${country.iso2}`;

            return (
                <li
                    ref={node => self.flags[index] = node}
                    key={`flag_no_${index}`}
                    data-flag-key={`flag_no_${index}`}
                    className={itemClasses}
                    data-dial-code="1"
                    data-country-code={country.iso2}
                    onClick={self.handleFlagItemClick.bind(self, country)}>
                    <div className={inputFlagClasses} style={self.getFlagStyle()} />
                    <span className='country-name'>{country.name}</span>
                    <span className='dial-code'>{'+' + country.dialCode}</span>
                </li>
            );
        });

        const dashedLi = (<li key={"dashes"} className="divider" />);
        // let's insert a dashed line in between preffered countries and the rest
        countryDropDownList.splice(this.state.preferredCountries.length, 0, dashedLi);

        const dropDownClasses = classNames({
            'country-list': true,
            'hide': !this.state.showDropDown
        });
        return (
            <ul
                ref={node => this.flagsDropdownList = node}
                className={dropDownClasses}
            >
                {countryDropDownList}
            </ul>
        );
    }

    getFlagStyle() {
        return {
            width: 16,
            height: 11,
            backgroundImage: `url(${this.props.flagsImagePath})`
        };
    }

    handleInputBlur() {
        this.props.onBlur(this.state.formattedNumber, this.state.selectedCountry);
    }

    render() {
        const arrowClasses = classNames({
            'arrow': true,
            'up': this.state.showDropDown
        });
        const inputClasses = classNames({
            'form-control': true,
            'invalid-number': !this.props.isValid(this.state.formattedNumber.replace(/\D/g, ''))
        });

        const flagViewClasses = classNames({
            'flag-dropdown': true,
            'open-dropdown': this.state.showDropDown
        });

        const inputFlagClasses = `flag ${this.state.selectedCountry.iso2}`;
        const otherProps = {}
        if(this.props.inputId) {
            otherProps.id = this.props.inputId
        }
        return (
            <div className={classNames('react-tel-input', this.props.classNames, this.props.className)}>
                <input
                    onChange={e => this.handleInput(e)}
                    onClick={() => this.handleInputClick()}
                    onFocus={() => this.handleInputFocus()}
                    onBlur={() =>this.handleInputBlur()}
                    onKeyDown={e => this.handleInputKeyDown(e)}
                    value={this.state.formattedNumber}
                    ref={node => this.numberInput = node}
                    type="tel"
                    className={inputClasses}
                    autoComplete={e => this.props.autoComplete(e)}
                    pattern={this.props.pattern}
                    required={this.props.required}
                    placeholder={this.props.placeholder}
                    disabled={this.props.disabled}
                    {...otherProps}
                />
                <div
                    className={flagViewClasses}
                    onKeyDown={e => this.handleKeydown(e)}
                >
                    <div
                        onClick={e => this.handleFlagDropdownClick(e)}
                        className='selected-flag'
                        title={`${this.state.selectedCountry.name}: + ${this.state.selectedCountry.dialCode}`}
                      >
                        <div className={inputFlagClasses} style={this.getFlagStyle()}>
                            <div className={arrowClasses}></div>
                        </div>
                    </div>
                    {this.state.showDropDown ? this.getCountryDropDownList() : ''}
                </div>
            </div>
        );
    }
}

ReactTelephoneInput.propTypes = {
    value: PropTypes.string,
    initialValue: PropTypes.string,
    autoFormat: PropTypes.bool,
    defaultCountry: PropTypes.string,
    onlyCountries: PropTypes.arrayOf(PropTypes.object),
    preferredCountries: PropTypes.arrayOf(PropTypes.string),
    classNames: PropTypes.string,
    className: PropTypes.string,
    inputId: PropTypes.string,
    onChange: PropTypes.func,
    onEnterKeyPress: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func,
    disabled: PropTypes.bool,
    pattern: PropTypes.string,
    required: PropTypes.bool,
}

ReactTelephoneInput.defaultProps = {
    autoFormat: true,
    onlyCountries: allCountries,
    defaultCountry: allCountries[0].iso2,
    isValid: isNumberValid,
    flagsImagePath: 'flags.png',
    onEnterKeyPress: () => {},
    preferredCountries: [],
    disabled: false,
    placeholder: '+1 (702) 123-4567',
    autoComplete: 'tel',
    required: false,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {}
}

export default onClickOutside(ReactTelephoneInput);
