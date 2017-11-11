var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// TODO - fix the onlyContries props. Currently expects that as an array of country object, but users should be able to send in array of country isos

var some = require('lodash/some');
var find = require('lodash/find');
var reduce = require('lodash/reduce');
var map = require('lodash/map');
var filter = require('lodash/filter');
var findIndex = require('lodash/findIndex');
var first = require('lodash/first');
var tail = require('lodash/tail');
var debounce = require('lodash/debounce');
var memoize = require('lodash/memoize');
var assign = require('lodash/assign');
var isEqual = require('lodash/isEqual');
// import lodash string methods
var trim = require('lodash/trim');
var startsWith = require('lodash/startsWith');
var PropTypes = require('prop-types');
var createReactClass = require('create-react-class');

var React = require('react');
var ReactDOM = require('react-dom');
var onClickOutside = require('react-onclickoutside').default;
var classNames = require('classnames');
var countryData = require('country-telephone-data');
var allCountries = countryData.allCountries;
var iso2Lookup = countryData.iso2Lookup;
var allCountryCodes = countryData.allCountryCodes;

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

export function formatNumber(text, pattern, autoFormat) {
    if (!text || text.length === 0) {
        return '+';
    }

    // for all strings with length less than 3, just return it (1, 2 etc.)
    // also return the same text if the selected country has no fixed format
    if (text && text.length < 2 || !pattern || !autoFormat) {
        return '+' + text;
    }

    var formattedObject = reduce(pattern, function (acc, character) {
        if (acc.remainingText.length === 0) {
            return acc;
        }

        if (character !== '.') {
            return {
                formattedText: acc.formattedText + character,
                remainingText: acc.remainingText
            };
        }

        return {
            formattedText: acc.formattedText + first(acc.remainingText),
            remainingText: tail(acc.remainingText)
        };
    }, { formattedText: '', remainingText: text.split('') });
    return formattedObject.formattedText + formattedObject.remainingText.join('');
}

export function isNumberValid(inputNumber) {
    var countries = countryData.allCountries;
    return some(countries, function (country) {
        return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
    });
}

export function replaceCountryCode(currentSelectedCountry, nextSelectedCountry, number) {
    var dialCodeRegex = RegExp('^(' + currentSelectedCountry.dialCode + ')');
    var newNumber = number.replace(dialCodeRegex, nextSelectedCountry.dialCode);

    // if we couldn't find any replacement, just attach the new country's dial code at the front
    if (newNumber === number) {
        return nextSelectedCountry.dialCode + number;
    } else {
        return newNumber;
    }
}

export var ReactTelephoneInput = createReactClass({
    displayName: 'ReactTelephoneInput',
    getInitialState: function getInitialState() {
        var preferredCountries = this.props.preferredCountries.map(function (iso2) {
            return iso2Lookup.hasOwnProperty(iso2) ? allCountries[iso2Lookup[iso2]] : null;
        }).filter(function (val) {
            return val !== null;
        });

        return assign({}, {
            preferredCountries: preferredCountries,
            showDropDown: false,
            queryString: '',
            freezeSelection: false,
            debouncedQueryStingSearcher: debounce(this.searchCountry, 300)
        }, this._mapPropsToState(this.props, true));
    },

    propTypes: {
        value: PropTypes.string,
        initialValue: PropTypes.string,
        autoFormat: PropTypes.bool,
        defaultCountry: PropTypes.string,
        isValid: PropTypes.func,
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
        inputProps: PropTypes.object
    },
    getDefaultProps: function getDefaultProps() {
        return {
            autoFormat: true,
            onlyCountries: allCountries,
            defaultCountry: allCountries[0].iso2,
            isValid: isNumberValid,
            flagsImagePath: 'flags.png',
            onEnterKeyPress: function onEnterKeyPress() {},
            preferredCountries: [],
            disabled: false,
            placeholder: '+1 (702) 123-4567',
            autoComplete: 'tel',
            required: false,
            inputProps: {}
        };
    },
    getNumber: function getNumber() {
        return this.state.formattedNumber !== '+' ? this.state.formattedNumber : '';
    },
    getValue: function getValue() {
        return this.getNumber();
    },
    componentDidMount: function componentDidMount() {
        document.addEventListener('keydown', this.handleKeydown);

        this._cursorToEnd(true);
        if (typeof this.props.onChange === 'function') {
            this.props.onChange(this.state.formattedNumber, this.state.selectedCountry);
        }
    },
    shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(nextProps, this.props) || !isEqual(nextState, this.state);
    },
    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
        this.setState(this._mapPropsToState(nextProps));
    },
    componentWillUnmount: function componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeydown);
    },
    scrollTo: function scrollTo(country, middle) {
        if (!country) {
            return;
        }

        var container = ReactDOM.findDOMNode(this.refs.flagDropdownList);

        if (!container) {
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
        var middleOffset = containerHeight / 2 - elementHeight / 2;

        if (elementTop < containerTop) {
            // scroll up
            if (middle) {
                newScrollTop -= middleOffset;
            }
            container.scrollTop = newScrollTop;
        } else if (elementBottom > containerBottom) {
            // scroll down
            if (middle) {
                newScrollTop += middleOffset;
            }
            var heightDifference = containerHeight - elementHeight;
            container.scrollTop = newScrollTop - heightDifference;
        }
    },


    // put the cursor to the end of the input (usually after a focus event)
    _cursorToEnd: function _cursorToEnd(skipFocus) {
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
    guessSelectedCountry: function guessSelectedCountry(inputNumber) {
        var secondBestGuess = find(allCountries, { iso2: this.props.defaultCountry }) || this.props.onlyCountries[0];
        var inputNumberForCountries = inputNumber.substr(0, 4);
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

        if (!bestGuess.name) {
            return secondBestGuess;
        }

        return bestGuess;
    },
    getElement: function getElement(index) {
        return ReactDOM.findDOMNode(this.refs['flag_no_' + index]);
    },
    handleFlagDropdownClick: function handleFlagDropdownClick(e) {
        var _this = this;

        if (this.props.disabled) {
            return;
        }

        e.preventDefault();
        // need to put the highlight on the current selected country if the dropdown is going to open up
        this.setState({
            showDropDown: !this.state.showDropDown,
            highlightCountry: find(this.props.onlyCountries, this.state.selectedCountry),
            highlightCountryIndex: findIndex(this.state.preferredCountries.concat(this.props.onlyCountries), this.state.selectedCountry)
        }, function () {
            // only need to scrool if the dropdown list is alive
            if (_this.state.showDropDown) {
                _this.scrollTo(_this.getElement(_this.state.highlightCountryIndex + _this.state.preferredCountries.length));
            }
        });
    },
    handleInput: function handleInput(event) {
        var formattedNumber = '+',
            newSelectedCountry = this.state.selectedCountry,
            freezeSelection = this.state.freezeSelection;

        // if the input is the same as before, must be some special key like enter etc.
        if (event.target.value === this.state.formattedNumber) {
            return;
        }

        // ie hack
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        if (event.target.value.length > 0) {
            // before entering the number in new format, lets check if the dial code now matches some other country
            var inputNumber = event.target.value.replace(/\D/g, '');

            // we don't need to send the whole number to guess the country... only the first 6 characters are enough
            // the guess country function can then use memoization much more effectively since the set of input it gets has drastically reduced
            if (!this.state.freezeSelection || this.state.selectedCountry.dialCode.length > inputNumber.length) {
                newSelectedCountry = this.guessSelectedCountry(inputNumber.substring(0, 6));
                freezeSelection = false;
            }
            // let us remove all non numerals from the input
            formattedNumber = formatNumber(inputNumber, newSelectedCountry.format, this.props.autoFormat);
        }

        var caretPosition = event.target.selectionStart;
        var oldFormattedText = this.state.formattedNumber;
        var diff = formattedNumber.length - oldFormattedText.length;

        this.setState({
            formattedNumber: formattedNumber,
            freezeSelection: freezeSelection,
            selectedCountry: newSelectedCountry.dialCode.length > 0 ? newSelectedCountry : this.state.selectedCountry
        }, function () {
            if (isModernBrowser) {
                if (caretPosition === 1 && formattedNumber.length === 2) {
                    caretPosition++;
                }

                if (diff > 0) {
                    caretPosition = caretPosition - diff;
                }

                if (caretPosition > 0 && oldFormattedText.length >= formattedNumber.length) {
                    this.refs.numberInput.setSelectionRange(caretPosition, caretPosition);
                }
            }

            if (this.props.onChange) {
                this.props.onChange(this.state.formattedNumber, this.state.selectedCountry);
            }
        });
    },
    handleInputClick: function handleInputClick() {
        this.setState({ showDropDown: false });
    },
    handleFlagItemClick: function handleFlagItemClick(country) {
        var currentSelectedCountry = this.state.selectedCountry;
        var nextSelectedCountry = find(this.props.onlyCountries, country);

        // tiny optimization
        if (currentSelectedCountry.iso2 !== nextSelectedCountry.iso2) {
            var newNumber = replaceCountryCode(currentSelectedCountry, nextSelectedCountry, this.state.formattedNumber.replace(/\D/g, '') // let's convert formatted number to just numbers for easy find/replace
            );

            var formattedNumber = formatNumber(newNumber, nextSelectedCountry.format, this.props.autoFormat);

            this.setState({
                showDropDown: false,
                selectedCountry: nextSelectedCountry,
                freezeSelection: true,
                formattedNumber: formattedNumber
            }, function () {
                this._cursorToEnd();
                if (this.props.onChange) {
                    this.props.onChange(formattedNumber, nextSelectedCountry);
                }
            });
        } else {
            this.setState({ showDropDown: false });
        }
    },
    handleInputFocus: function handleInputFocus() {
        // trigger parent component's onFocus handler
        if (typeof this.props.onFocus === 'function') {
            this.props.onFocus(this.state.formattedNumber, this.state.selectedCountry);
        }

        this._fillDialCode();
    },
    _mapPropsToState: function _mapPropsToState(props) {
        var firstCall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        var inputNumber = void 0;

        if (props.value) {
            inputNumber = props.value;
        } else if (props.initialValue && firstCall) {
            inputNumber = props.initialValue;
        } else if (this.props.value) {
            // just cleared the value
            inputNumber = '';
        } else if (this.state && this.state.formattedNumber && this.state.formattedNumber.length > 0) {
            inputNumber = this.state.formattedNumber;
        } else {
            inputNumber = '';
        }

        var selectedCountryGuess = this.guessSelectedCountry(inputNumber.replace(/\D/g, ''));
        var selectedCountryGuessIndex = findIndex(allCountries, selectedCountryGuess);
        var formattedNumber = formatNumber(inputNumber.replace(/\D/g, ''), selectedCountryGuess ? selectedCountryGuess.format : null, this.props.autoFormat);

        return {
            selectedCountry: selectedCountryGuess,
            highlightCountryIndex: selectedCountryGuessIndex,
            formattedNumber: formattedNumber
        };
    },
    _fillDialCode: function _fillDialCode() {
        // if the input is blank, insert dial code of the selected country
        if (this.refs.numberInput.value === '+') {
            this.setState({
                formattedNumber: '+' + this.state.selectedCountry.dialCode
            });
        }
    },
    _getHighlightCountryIndex: function _getHighlightCountryIndex(direction) {
        // had to write own function because underscore does not have findIndex. lodash has it
        var highlightCountryIndex = this.state.highlightCountryIndex + direction;

        if (highlightCountryIndex < 0 || highlightCountryIndex >= this.props.onlyCountries.length + this.state.preferredCountries.length) {
            return highlightCountryIndex - direction;
        }

        return highlightCountryIndex;
    },

    // memoize search results... caching all the way
    _searchCountry: memoize(function (queryString) {
        if (!queryString || queryString.length === 0) {
            return null;
        }
        // don't include the preferred countries in search
        var probableCountries = filter(this.props.onlyCountries, function (country) {
            return startsWith(country.name.toLowerCase(), queryString.toLowerCase());
        }, this);
        return probableCountries[0];
    }),
    searchCountry: function searchCountry() {
        var probableCandidate = this._searchCountry(this.state.queryString) || this.props.onlyCountries[0];
        var probableCandidateIndex = findIndex(this.props.onlyCountries, probableCandidate) + this.state.preferredCountries.length;
        this.scrollTo(this.getElement(probableCandidateIndex), true);

        this.setState({
            queryString: '',
            highlightCountryIndex: probableCandidateIndex
        });
    },
    handleKeydown: function handleKeydown(event) {
        if (!this.state.showDropDown) {
            return;
        }

        // ie hack
        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        var self = this;
        function _moveHighlight(direction) {
            self.setState({
                highlightCountryIndex: self._getHighlightCountryIndex(direction)
            }, function () {
                self.scrollTo(self.getElement(self.state.highlightCountryIndex), true);
            });
        }

        switch (event.which) {
            case keys.DOWN:
                _moveHighlight(1);
                break;
            case keys.UP:
                _moveHighlight(-1);
                break;
            case keys.ENTER:
                this.handleFlagItemClick(this.state.preferredCountries.concat(this.props.onlyCountries)[this.state.highlightCountryIndex], event);
                break;
            case keys.ESC:
                this.setState({ showDropDown: false }, this._cursorToEnd);
                break;
            default:
                if (event.which >= keys.A && event.which <= keys.Z || event.which === keys.SPACE) {
                    this.setState({
                        queryString: this.state.queryString + String.fromCharCode(event.which)
                    }, this.state.debouncedQueryStingSearcher);
                }
        }
    },
    handleInputKeyDown: function handleInputKeyDown(event) {
        if (event.which === keys.ENTER) {
            this.props.onEnterKeyPress(event);
        }
    },
    handleClickOutside: function handleClickOutside() {
        if (this.state.showDropDown) {
            this.setState({
                showDropDown: false
            });
        }
    },
    getCountryDropDownList: function getCountryDropDownList() {
        var self = this;
        var countryDropDownList = map(this.state.preferredCountries.concat(this.props.onlyCountries), function (country, index) {
            var itemClasses = classNames({
                country: true,
                preferred: findIndex(self.state.preferredCountries, {
                    iso2: country.iso2
                }) >= 0,
                highlight: self.state.highlightCountryIndex === index
            });

            var inputFlagClasses = 'flag ' + country.iso2;

            return React.createElement(
                'li',
                {
                    ref: 'flag_no_' + index,
                    key: 'flag_no_' + index,
                    'data-flag-key': 'flag_no_' + index,
                    className: itemClasses,
                    'data-dial-code': '1',
                    'data-country-code': country.iso2,
                    onClick: self.handleFlagItemClick.bind(self, country)
                },
                React.createElement('div', {
                    className: inputFlagClasses,
                    style: self.getFlagStyle()
                }),
                React.createElement(
                    'span',
                    { className: 'country-name' },
                    country.name
                ),
                React.createElement(
                    'span',
                    { className: 'dial-code' },
                    '+' + country.dialCode
                )
            );
        });

        var dashedLi = React.createElement('li', { key: 'dashes', className: 'divider' });
        // let's insert a dashed line in between preffered countries and the rest
        countryDropDownList.splice(this.state.preferredCountries.length, 0, dashedLi);

        var dropDownClasses = classNames({
            'country-list': true,
            hide: !this.state.showDropDown
        });
        return React.createElement(
            'ul',
            { ref: 'flagDropdownList', className: dropDownClasses },
            countryDropDownList
        );
    },
    getFlagStyle: function getFlagStyle() {
        return {
            width: 16,
            height: 11,
            backgroundImage: 'url(' + this.props.flagsImagePath + ')'
        };
    },
    handleInputBlur: function handleInputBlur() {
        if (typeof this.props.onBlur === 'function') {
            this.props.onBlur(this.state.formattedNumber, this.state.selectedCountry);
        }
    },
    render: function render() {
        var arrowClasses = classNames({
            arrow: true,
            up: this.state.showDropDown
        });
        var inputClasses = classNames({
            'form-control': true,
            'invalid-number': !this.props.isValid(this.state.formattedNumber.replace(/\D/g, ''))
        });

        var flagViewClasses = classNames({
            'flag-dropdown': true,
            'open-dropdown': this.state.showDropDown
        });

        var inputFlagClasses = 'flag ' + this.state.selectedCountry.iso2;
        var otherProps = this.props.inputProps;
        if (this.props.inputId) {
            otherProps.id = this.props.inputId;
        }
        return React.createElement(
            'div',
            {
                className: classNames('react-tel-input', this.props.classNames, this.props.className)
            },
            React.createElement('input', _extends({
                onChange: this.handleInput,
                onClick: this.handleInputClick,
                onFocus: this.handleInputFocus,
                onBlur: this.handleInputBlur,
                onKeyDown: this.handleInputKeyDown,
                value: this.state.formattedNumber,
                ref: 'numberInput',
                type: 'tel',
                className: inputClasses,
                autoComplete: this.props.autoComplete,
                pattern: this.props.pattern,
                required: this.props.required,
                placeholder: this.props.placeholder,
                disabled: this.props.disabled
            }, otherProps)),
            React.createElement(
                'div',
                {
                    ref: 'flagDropDownButton',
                    className: flagViewClasses,
                    onKeyDown: this.handleKeydown
                },
                React.createElement(
                    'div',
                    {
                        ref: 'selectedFlag',
                        onClick: this.handleFlagDropdownClick,
                        className: 'selected-flag',
                        title: this.state.selectedCountry.name + ': + ' + this.state.selectedCountry.dialCode
                    },
                    React.createElement(
                        'div',
                        {
                            className: inputFlagClasses,
                            style: this.getFlagStyle()
                        },
                        React.createElement('div', { className: arrowClasses })
                    )
                ),
                this.state.showDropDown ? this.getCountryDropDownList() : ''
            )
        );
    }
});

export default onClickOutside(ReactTelephoneInput);