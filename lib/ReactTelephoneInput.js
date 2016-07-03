'use strict';

// TODO - fix the onlyContries props. Currently expects that as an array of country object, but users should be able to send in array of country isos

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReactTelephoneInput = undefined;

var _some = require('lodash/collection/some');

var _some2 = _interopRequireDefault(_some);

var _findWhere = require('lodash/collection/findWhere');

var _findWhere2 = _interopRequireDefault(_findWhere);

var _reduce = require('lodash/collection/reduce');

var _reduce2 = _interopRequireDefault(_reduce);

var _map = require('lodash/collection/map');

var _map2 = _interopRequireDefault(_map);

var _filter = require('lodash/collection/filter');

var _filter2 = _interopRequireDefault(_filter);

var _findIndex = require('lodash/array/findIndex');

var _findIndex2 = _interopRequireDefault(_findIndex);

var _first = require('lodash/array/first');

var _first2 = _interopRequireDefault(_first);

var _rest = require('lodash/array/rest');

var _rest2 = _interopRequireDefault(_rest);

var _debounce = require('lodash/function/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _memoize = require('lodash/function/memoize');

var _memoize2 = _interopRequireDefault(_memoize);

var _assign = require('lodash/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _isEqual = require('lodash/lang/isEqual');

var _isEqual2 = _interopRequireDefault(_isEqual);

var _trim = require('lodash/string/trim');

var _trim2 = _interopRequireDefault(_trim);

var _startsWith = require('lodash/string/startsWith');

var _startsWith2 = _interopRequireDefault(_startsWith);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _country_data = require('./country_data');

var _country_data2 = _interopRequireDefault(_country_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allCountries = _country_data2.default.allCountries;
// import lodash string methods

var allCountriesIso2Lookup = _country_data2.default.allCountriesIso2Lookup;

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
    var countries = _country_data2.default.allCountries;
    return (0, _some2.default)(countries, function (country) {
        return (0, _startsWith2.default)(inputNumber, country.dialCode) || (0, _startsWith2.default)(country.dialCode, inputNumber);
    });
}

var ReactTelephoneInput = exports.ReactTelephoneInput = _react2.default.createClass({
    displayName: 'ReactTelephoneInput',
    getInitialState: function getInitialState() {
        var preferredCountries = this.props.preferredCountries.map(function (iso2) {
            return allCountriesIso2Lookup.hasOwnProperty(iso2) ? allCountries[allCountriesIso2Lookup[iso2]] : null;
        }).filter(function (val) {
            return val !== null;
        });

        return (0, _assign2.default)({}, {
            preferredCountries: preferredCountries,
            showDropDown: false,
            queryString: '',
            freezeSelection: false,
            debouncedQueryStingSearcher: (0, _debounce2.default)(this.searchCountry, 100)
        }, this._mapPropsToState(this.props));
    },

    propTypes: {
        value: _react2.default.PropTypes.string,
        initialValue: _react2.default.PropTypes.string,
        autoFormat: _react2.default.PropTypes.bool,
        defaultCountry: _react2.default.PropTypes.string,
        onlyCountries: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.object),
        preferredCountries: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.string),
        classNames: _react2.default.PropTypes.string,
        onChange: _react2.default.PropTypes.func,
        onEnterKeyPress: _react2.default.PropTypes.func,
        onBlur: _react2.default.PropTypes.func,
        onFocus: _react2.default.PropTypes.func
    },
    getDefaultProps: function getDefaultProps() {
        return {
            value: '',
            initialValue: '',
            autoFormat: true,
            onlyCountries: allCountries,
            defaultCountry: allCountries[0].iso2,
            isValid: isNumberValid,
            flagsImagePath: 'flags.png',
            onEnterKeyPress: function onEnterKeyPress() {},
            preferredCountries: []
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
        return !(0, _isEqual2.default)(nextProps, this.props) || !(0, _isEqual2.default)(nextState, this.state);
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

        var container = _reactDom2.default.findDOMNode(this.refs.flagDropdownList);

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
    formatNumber: function formatNumber(text, pattern) {
        if (!text || text.length === 0) {
            return '+';
        }

        // for all strings with length less than 3, just return it (1, 2 etc.)
        // also return the same text if the selected country has no fixed format
        if (text && text.length < 2 || !pattern || !this.props.autoFormat) {
            return '+' + text;
        }

        var formattedObject = (0, _reduce2.default)(pattern, function (acc, character) {
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
                formattedText: acc.formattedText + (0, _first2.default)(acc.remainingText),
                remainingText: (0, _rest2.default)(acc.remainingText)
            };
        }, { formattedText: '', remainingText: text.split('') });
        return formattedObject.formattedText + formattedObject.remainingText.join('');
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
    guessSelectedCountry: (0, _memoize2.default)(function (inputNumber) {
        var secondBestGuess = (0, _findWhere2.default)(allCountries, { iso2: this.props.defaultCountry }) || this.props.onlyCountries[0];
        if ((0, _trim2.default)(inputNumber) !== '') {
            var bestGuess = (0, _reduce2.default)(this.props.onlyCountries, function (selectedCountry, country) {
                if ((0, _startsWith2.default)(inputNumber, country.dialCode)) {
                    if (country.dialCode.length > selectedCountry.dialCode.length) {
                        return country;
                    }
                    if (country.dialCode.length === selectedCountry.dialCode.length && country.priority < selectedCountry.priority) {
                        return country;
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
    }),
    getElement: function getElement(index) {
        return _reactDom2.default.findDOMNode(this.refs['flag_no_' + index]);
    },
    handleFlagDropdownClick: function handleFlagDropdownClick() {
        var _this = this;

        // need to put the highlight on the current selected country if the dropdown is going to open up
        this.setState({
            showDropDown: !this.state.showDropDown,
            highlightCountry: (0, _findWhere2.default)(this.props.onlyCountries, this.state.selectedCountry),
            highlightCountryIndex: (0, _findIndex2.default)(this.state.preferredCountries.concat(this.props.onlyCountries), this.state.selectedCountry)
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
            formattedNumber = this.formatNumber(inputNumber, newSelectedCountry.format);
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
        var nextSelectedCountry = (0, _findWhere2.default)(this.props.onlyCountries, country);

        // tiny optimization
        if (currentSelectedCountry.iso2 !== nextSelectedCountry.iso2) {
            // TODO - the below replacement is a bug. It will replace stuff from middle too
            var newNumber = this.state.formattedNumber.replace(currentSelectedCountry.dialCode, nextSelectedCountry.dialCode);
            var formattedNumber = this.formatNumber(newNumber.replace(/\D/g, ''), nextSelectedCountry.format);

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
            this.props.onFocus(this.state.formattedNumer, this.state.selectedCountry);
        }

        this._fillDialCode();
    },
    _mapPropsToState: function _mapPropsToState(props) {
        var inputNumber = props.initialValue || props.value || '';
        var selectedCountryGuess = this.guessSelectedCountry(inputNumber.replace(/\D/g, ''));
        var selectedCountryGuessIndex = (0, _findIndex2.default)(allCountries, selectedCountryGuess);
        var formattedNumber = this.formatNumber(inputNumber.replace(/\D/g, ''), selectedCountryGuess ? selectedCountryGuess.format : null);
        return {
            selectedCountry: selectedCountryGuess,
            highlightCountryIndex: selectedCountryGuessIndex,
            formattedNumber: formattedNumber
        };
    },
    _fillDialCode: function _fillDialCode() {
        // if the input is blank, insert dial code of the selected country
        if (this.refs.numberInput.value === '+') {
            this.setState({ formattedNumber: '+' + this.state.selectedCountry.dialCode });
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
    _searchCountry: (0, _memoize2.default)(function (queryString) {
        if (!queryString || queryString.length === 0) {
            return null;
        }
        // don't include the preferred countries in search
        var probableCountries = (0, _filter2.default)(this.props.onlyCountries, function (country) {
            return (0, _startsWith2.default)(country.name.toLowerCase(), queryString.toLowerCase());
        }, this);
        return probableCountries[0];
    }),
    searchCountry: function searchCountry() {
        var probableCandidate = this._searchCountry(this.state.queryString) || this.props.onlyCountries[0];
        var probableCandidateIndex = (0, _findIndex2.default)(this.props.onlyCountries, probableCandidate) + this.state.preferredCountries.length;

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
                this.handleFlagItemClick(this.props.onlyCountries[this.state.highlightCountryIndex], event);
                break;
            case keys.ESC:
                this.setState({ showDropDown: false }, this._cursorToEnd);
                break;
            default:
                if (event.which >= keys.A && event.which <= keys.Z || event.which === keys.SPACE) {
                    this.setState({ queryString: this.state.queryString + String.fromCharCode(event.which) }, this.state.debouncedQueryStingSearcher);
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

        var countryDropDownList = (0, _map2.default)(this.state.preferredCountries.concat(this.props.onlyCountries), function (country, index) {
            var itemClasses = (0, _classnames2.default)({
                country: true,
                preferred: country.iso2 === 'us' || country.iso2 === 'gb',
                active: country.iso2 === 'us',
                highlight: this.state.highlightCountryIndex === index
            });

            var inputFlagClasses = 'flag ' + country.iso2;

            return _react2.default.createElement(
                'li',
                {
                    ref: 'flag_no_' + index,
                    key: 'flag_no_' + index,
                    'data-flag-key': 'flag_no_' + index,
                    className: itemClasses,
                    'data-dial-code': '1',
                    'data-country-code': country.iso2,
                    onClick: this.handleFlagItemClick.bind(this, country) },
                _react2.default.createElement('div', { className: inputFlagClasses, style: this.getFlagStyle() }),
                _react2.default.createElement(
                    'span',
                    { className: 'country-name' },
                    country.name
                ),
                _react2.default.createElement(
                    'span',
                    { className: 'dial-code' },
                    '+' + country.dialCode
                )
            );
        }, this);

        var dashedLi = _react2.default.createElement('li', { key: "dashes", className: 'divider' });
        // let's insert a dashed line in between preffered countries and the rest
        countryDropDownList.splice(this.state.preferredCountries.length, 0, dashedLi);

        var dropDownClasses = (0, _classnames2.default)({
            'country-list': true,
            'hide': !this.state.showDropDown
        });
        return _react2.default.createElement(
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
        var arrowClasses = (0, _classnames2.default)({
            'arrow': true,
            'up': this.state.showDropDown
        });
        var inputClasses = (0, _classnames2.default)({
            'form-control': true,
            'invalid-number': !this.props.isValid(this.state.formattedNumber.replace(/\D/g, ''))
        });

        var flagViewClasses = (0, _classnames2.default)({
            'flag-dropdown': true,
            'open-dropdown': this.state.showDropDown
        });

        var inputFlagClasses = 'flag ' + this.state.selectedCountry.iso2;

        return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)('react-tel-input', this.props.classNames) },
            _react2.default.createElement('input', {
                onChange: this.handleInput,
                onClick: this.handleInputClick,
                onFocus: this.handleInputFocus,
                onBlur: this.handleInputBlur,
                onKeyDown: this.handleInputKeyDown,
                value: this.state.formattedNumber,
                ref: 'numberInput',
                type: 'tel',
                className: inputClasses,
                autoComplete: 'tel',
                placeholder: '+1 (702) 123-4567' }),
            _react2.default.createElement(
                'div',
                { ref: 'flagDropDownButton', className: flagViewClasses, onKeyDown: this.handleKeydown },
                _react2.default.createElement(
                    'div',
                    { ref: 'selectedFlag', onClick: this.handleFlagDropdownClick, className: 'selected-flag', title: this.state.selectedCountry.name + ': + ' + this.state.selectedCountry.dialCode },
                    _react2.default.createElement(
                        'div',
                        { className: inputFlagClasses, style: this.getFlagStyle() },
                        _react2.default.createElement('div', { className: arrowClasses })
                    )
                ),
                this.state.showDropDown ? this.getCountryDropDownList() : ''
            )
        );
    }
});

exports.default = (0, _reactOnclickoutside2.default)(ReactTelephoneInput);