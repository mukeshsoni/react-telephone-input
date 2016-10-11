'use strict';

// TODO - fix the onlyContries props. Currently expects that as an array of country object, but users should be able to send in array of country isos

var some = require('lodash/collection/some');
var findWhere = require('lodash/collection/findWhere');
var reduce = require('lodash/collection/reduce');
var map = require('lodash/collection/map');
var filter = require('lodash/collection/filter');
var findIndex = require('lodash/array/findIndex');
var first = require('lodash/array/first');
var rest = require('lodash/array/rest');
var debounce = require('lodash/function/debounce');
var memoize = require('lodash/function/memoize');
var assign = require('lodash/object/assign');
var isEqual = require('lodash/lang/isEqual');
// import lodash string methods
var trim = require('lodash/string/trim');
var startsWith = require('lodash/string/startsWith');

var React = require('react');
var ReactDOM = require('react-dom');
var onClickOutside = require('react-onclickoutside');
var classNames = require('classnames');
var countryData = require('./country_data.js')
// var countryData = require('country-telephone-data')
var allCountries = countryData.allCountries;
var iso2Lookup = countryData.iso2Lookup;


if (typeof document !== 'undefined') {
  var isModernBrowser = Boolean(document.createElement('input').setSelectionRange);
} else {
  var isModernBrowser = true;
}

var keys = {
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

function isNumberValid(inputNumber) {
    var countries = countryData.allCountries;
    return some(countries, function(country) {
        return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
    });
}

  export var ReactTelephoneInput = React.createClass({
    getInitialState() {
        var preferredCountries = this.props.preferredCountries.map(
            iso2 => iso2Lookup.hasOwnProperty(iso2) ? allCountries[iso2Lookup[iso2]] : null
        ).filter(val => val !== null);

        return assign(
            {},
            {
                preferredCountries: preferredCountries,
                showDropDown: false,
                queryString: '',
                freezeSelection: false,
                debouncedQueryStingSearcher: debounce(this.searchCountry, 300)
            },
            this._mapPropsToState(this.props)
        );
    },
    propTypes: {
        value: React.PropTypes.string,
        initialValue: React.PropTypes.string,
        autoFormat: React.PropTypes.bool,
        defaultCountry: React.PropTypes.string,
        onlyCountries: React.PropTypes.arrayOf(React.PropTypes.object),
        preferredCountries: React.PropTypes.arrayOf(React.PropTypes.string),
        classNames: React.PropTypes.string,
        onChange: React.PropTypes.func,
        onEnterKeyPress: React.PropTypes.func,
        onBlur: React.PropTypes.func,
        onFocus: React.PropTypes.func,
        disabled: React.PropTypes.bool,
        pattern: React.PropTypes.string,
    },
    getDefaultProps() {
        return {
            value: '',
            initialValue: '',
            autoFormat: true,
            onlyCountries: allCountries,
            defaultCountry: allCountries[0].iso2,
            isValid: isNumberValid,
            flagsImagePath: 'flags.png',
            onEnterKeyPress: function () {},
            preferredCountries: [],
            disabled: false,
            placeholder: '+1 (702) 123-4567'
        };
    },
    getNumber() {
        return this.state.formattedNumber !== '+' ? this.state.formattedNumber : '';
    },
    getValue() {
        return this.getNumber();
    },
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown);

        this._cursorToEnd(true);
        if(typeof this.props.onChange === 'function') {
            this.props.onChange(this.state.formattedNumber, this.state.selectedCountry);
        }
    },
    shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state);
    },
    componentWillReceiveProps(nextProps) {
        this.setState(this._mapPropsToState(nextProps));
    },
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
    },
    scrollTo(country, middle) {
        if(!country) {
            return;
        }

        var container = ReactDOM.findDOMNode(this.refs.flagDropdownList);

        if(!container) {
          return;
        }

        var containerHeight = container.offsetHeight;
        var containerOffset = container.getBoundingClientRect();
        var containerTop = containerOffset.top + document.body.scrollTop;
        var containerBottom = containerTop + containerHeight;

        var element = country;
        var elementOffset = element.getBoundingClientRect();

        var elementHeight = element.offsetHeight;
        var elementTop = elementOffset.top + document.body.scrollTop;
        var elementBottom = elementTop + elementHeight;
        var newScrollTop = elementTop - containerTop + container.scrollTop;
        var middleOffset = (containerHeight / 2) - (elementHeight / 2);

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
            var heightDifference = containerHeight - elementHeight;
            container.scrollTop = newScrollTop - heightDifference;
        }
    },
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
                remainingText: rest(acc.remainingText)
            };
        }, {formattedText: '', remainingText: text.split('')});
        return formattedObject.formattedText + formattedObject.remainingText.join('');
    },

    // put the cursor to the end of the input (usually after a focus event)
    _cursorToEnd(skipFocus) {
        var input = this.refs.numberInput;
        if (skipFocus) {
            this._fillDialCode();
        } else {
            input.focus();

            if (isModernBrowser) {
                var len = input.value.length;
                input.setSelectionRange(len, len);
            }
        }
    },
    // memoize results based on the first 5/6 characters. That is all that matters
    guessSelectedCountry: memoize(function(inputNumber) {
        var secondBestGuess = findWhere(allCountries, {iso2: this.props.defaultCountry}) || this.props.onlyCountries[0];
        if(trim(inputNumber) !== '') {
            var bestGuess = reduce(this.props.onlyCountries, function(selectedCountry, country) {
                            if(startsWith(inputNumber, country.dialCode)) {
                                if(country.dialCode.length > selectedCountry.dialCode.length) {
                                    return country;
                                }
                                if(country.dialCode.length === selectedCountry.dialCode.length && country.priority < selectedCountry.priority) {
                                    return country;
                                }
                            }

                            return selectedCountry;
                        }, {dialCode: '', priority: 10001}, this);
        } else {
            return secondBestGuess;
        }

        if(!bestGuess.name) {
            return secondBestGuess;
        }

        return bestGuess;
    }),
    getElement(index) {
        return ReactDOM.findDOMNode(this.refs[`flag_no_${index}`]);
    },
    handleFlagDropdownClick() {
        if (this.props.disabled) {
          return;
        }
        // need to put the highlight on the current selected country if the dropdown is going to open up
        this.setState({
            showDropDown: !this.state.showDropDown,
            highlightCountry: findWhere(this.props.onlyCountries, this.state.selectedCountry),
            highlightCountryIndex: findIndex(this.state.preferredCountries.concat(this.props.onlyCountries), this.state.selectedCountry)
        }, () => {
            // only need to scrool if the dropdown list is alive
            if(this.state.showDropDown) {
                this.scrollTo(this.getElement(this.state.highlightCountryIndex + this.state.preferredCountries.length));
            }
        });
    },
    handleInput(event) {
        var formattedNumber = '+', newSelectedCountry = this.state.selectedCountry, freezeSelection = this.state.freezeSelection;

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
            var inputNumber = event.target.value.replace(/\D/g, '');

            // we don't need to send the whole number to guess the country... only the first 6 characters are enough
            // the guess country function can then use memoization much more effectively since the set of input it gets has drastically reduced
            if(!this.state.freezeSelection || this.state.selectedCountry.dialCode.length > inputNumber.length) {
                newSelectedCountry = this.guessSelectedCountry(inputNumber.substring(0, 6));
                freezeSelection = false;
            }
            // let us remove all non numerals from the input
            formattedNumber = this.formatNumber(inputNumber, newSelectedCountry.format);
        }

        var caretPosition = event.target.selectionStart;
        var oldFormattedText = this.state.formattedNumber;
        var diff = formattedNumber.length - oldFormattedText.length;

        this.setState({
            formattedNumber: formattedNumber,
            freezeSelection: freezeSelection,
            selectedCountry: newSelectedCountry.dialCode.length > 0 ? newSelectedCountry : this.state.selectedCountry
        }, function() {
            if(isModernBrowser) {
                if((caretPosition === 1) && (formattedNumber.length === 2)) {
                    caretPosition++;
                }

                if(diff > 0) {
                    caretPosition = caretPosition - diff;
                }

                if(caretPosition > 0 && oldFormattedText.length >= formattedNumber.length) {
                    this.refs.numberInput.setSelectionRange(caretPosition, caretPosition);
                }
            }

            if(this.props.onChange) {
                this.props.onChange(this.state.formattedNumber, this.state.selectedCountry);
            }
        });

    },
    handleInputClick() {
        this.setState({showDropDown: false});
    },
    handleFlagItemClick(country) {
        var currentSelectedCountry = this.state.selectedCountry;
        var nextSelectedCountry = findWhere(this.props.onlyCountries, country);

        // tiny optimization
        if(currentSelectedCountry.iso2 !== nextSelectedCountry.iso2) {
            // TODO - the below replacement is a bug. It will replace stuff from middle too
            var newNumber = this.state.formattedNumber.replace(currentSelectedCountry.dialCode, nextSelectedCountry.dialCode);
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
          this.setState({showDropDown: false});
        }
    },
    handleInputFocus() {
        // trigger parent component's onFocus handler
        if(typeof this.props.onFocus === 'function') {
            this.props.onFocus(this.state.formattedNumer, this.state.selectedCountry);
        }

        this._fillDialCode();
    },
    _mapPropsToState(props) {
        let inputNumber;

        if(props.value !== this.props.value) {
          inputNumber = props.initialValue
        } else if(props.initialValue !== this.props.initialValue) {
          inputNumber = props.initialValue
        } else {
          inputNumber = ''
        }

        let selectedCountryGuess = this.guessSelectedCountry(inputNumber.replace(/\D/g, ''));
        let selectedCountryGuessIndex = findIndex(allCountries, selectedCountryGuess);
        let formattedNumber = this.formatNumber(
            inputNumber.replace(/\D/g, ''), selectedCountryGuess ? selectedCountryGuess.format : null
        );
        return {
            selectedCountry: selectedCountryGuess,
            highlightCountryIndex: selectedCountryGuessIndex,
            formattedNumber: formattedNumber
        }
    },
    _fillDialCode() {
        // if the input is blank, insert dial code of the selected country
        if(this.refs.numberInput.value === '+') {
            this.setState({formattedNumber: '+' + this.state.selectedCountry.dialCode});
        }
    },
    _getHighlightCountryIndex(direction) {
        // had to write own function because underscore does not have findIndex. lodash has it
        var highlightCountryIndex = this.state.highlightCountryIndex + direction;

        if(highlightCountryIndex < 0
            || highlightCountryIndex >= (this.props.onlyCountries.length + this.state.preferredCountries.length)) {
            return highlightCountryIndex - direction;
        }

        return highlightCountryIndex;
    },
    // memoize search results... caching all the way
    _searchCountry: memoize(function(queryString) {
        if(!queryString || queryString.length === 0) {
            return null;
        }
        // don't include the preferred countries in search
        var probableCountries = filter(this.props.onlyCountries, function(country) {
            return startsWith(country.name.toLowerCase(), queryString.toLowerCase());
        }, this);
        return probableCountries[0];
    }),
    searchCountry() {
        const probableCandidate = this._searchCountry(this.state.queryString) || this.props.onlyCountries[0];
        const probableCandidateIndex = findIndex(this.props.onlyCountries, probableCandidate) + this.state.preferredCountries.length;
console.log('probableCandidateIndex', probableCandidateIndex)
        this.scrollTo(this.getElement(probableCandidateIndex), true);

        this.setState({
            queryString: '',
            highlightCountryIndex: probableCandidateIndex
        });
    },
    handleKeydown(event) {
        if(!this.state.showDropDown) {
           return;
        }

        // ie hack
        if(event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        var self = this;
        function _moveHighlight(direction) {
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
            console.log('enter key', this.state.highlightCountryIndex, this.props.onlyCountries[this.state.highlightCountryIndex])
                    this.handleFlagItemClick(this.state.preferredCountries.concat(this.props.onlyCountries)[this.state.highlightCountryIndex], event);
                    break;
            case keys.ESC:
                this.setState({showDropDown: false}, this._cursorToEnd);
                break;
            default:
                if((event.which >= keys.A && event.which <= keys.Z) || event.which === keys.SPACE) {
                    this.setState({queryString: this.state.queryString + String.fromCharCode(event.which)},
                        this.state.debouncedQueryStingSearcher);
                }
        }
    },
    handleInputKeyDown(event) {
        if(event.which === keys.ENTER) {
            this.props.onEnterKeyPress(event);
        }
    },
    handleClickOutside() {
        if(this.state.showDropDown) {
            this.setState({
                showDropDown: false
            });
        }
    },
    getCountryDropDownList() {
        var countryDropDownList = map(this.state.preferredCountries.concat(this.props.onlyCountries), function(country, index) {
            let itemClasses = classNames({
                country: true,
                preferred: findIndex(this.state.preferredCountries, {iso2: country.iso2}) >= 0,
                highlight: this.state.highlightCountryIndex === index
            });

            var inputFlagClasses = `flag ${country.iso2}`;

            return (
                <li
                    ref={`flag_no_${index}`}
                    key={`flag_no_${index}`}
                    data-flag-key={`flag_no_${index}`}
                    className={itemClasses}
                    data-dial-code="1"
                    data-country-code={country.iso2}
                    onClick={this.handleFlagItemClick.bind(this, country)}>
                    <div className={inputFlagClasses} style={this.getFlagStyle()} />
                    <span className='country-name'>{country.name}</span>
                    <span className='dial-code'>{'+' + country.dialCode}</span>
                </li>
            );
        }, this);

        const dashedLi = (<li key={"dashes"} className="divider" />);
        // let's insert a dashed line in between preffered countries and the rest
        countryDropDownList.splice(this.state.preferredCountries.length, 0, dashedLi);

        const dropDownClasses = classNames({
            'country-list': true,
            'hide': !this.state.showDropDown
        });
        return (
            <ul ref="flagDropdownList" className={dropDownClasses}>
                {countryDropDownList}
            </ul>
        );
    },
    getFlagStyle() {
        return {
            width: 16,
            height: 11,
            backgroundImage: `url(${this.props.flagsImagePath})`
        };
    },
    handleInputBlur() {
      if(typeof this.props.onBlur === 'function') {
        this.props.onBlur(this.state.formattedNumber, this.state.selectedCountry);
      }
    },
    render() {
        var arrowClasses = classNames({
            'arrow': true,
            'up': this.state.showDropDown
        });
        var inputClasses = classNames({
            'form-control': true,
            'invalid-number': !this.props.isValid(this.state.formattedNumber.replace(/\D/g, ''))
        });

        var flagViewClasses = classNames({
            'flag-dropdown': true,
            'open-dropdown': this.state.showDropDown
        });

        var inputFlagClasses = `flag ${this.state.selectedCountry.iso2}`;

        return (
            <div className={classNames('react-tel-input', this.props.classNames)}>
                <input
                    onChange={this.handleInput}
                    onClick={this.handleInputClick}
                    onFocus={this.handleInputFocus}
                    onBlur={this.handleInputBlur}
                    onKeyDown={this.handleInputKeyDown}
                    value={this.state.formattedNumber}
                    ref="numberInput"
                    type="tel"
                    className={inputClasses}
                    autoComplete='tel'
                    pattern={this.props.pattern}
                    placeholder={this.state.placeholder}
                    disabled={this.props.disabled}/>
                <div ref='flagDropDownButton' className={flagViewClasses} onKeyDown={this.handleKeydown} >
                    <div ref='selectedFlag' onClick={this.handleFlagDropdownClick} className='selected-flag' title={`${this.state.selectedCountry.name}: + ${this.state.selectedCountry.dialCode}`}>
                        <div className={inputFlagClasses} style={this.getFlagStyle()}>
                            <div className={arrowClasses}></div>
                        </div>
                    </div>
                    {this.state.showDropDown ? this.getCountryDropDownList() : ''}
                </div>
            </div>
        );
    }
});

export default onClickOutside(ReactTelephoneInput);
