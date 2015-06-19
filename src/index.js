/**
 * @jsx React.DOM
 */

// TODO - fix the onlyContries props. Currently expects that as an array of country object, but users should be able to send in array of country isos

var some = require('lodash/collection/some');
var findWhere = require('lodash/collection/findWhere');
var reduce =  require('lodash/collection/reduce');
var map =  require('lodash/collection/map');
var filter = require('lodash/collection/filter');
var any = require('lodash/collection/any');
var findIndex = require('lodash/array/findIndex');
var first = require('lodash/array/first');
var rest = require('lodash/array/rest');
var debounce = require('lodash/function/debounce');
var memoize = require('lodash/function/memoize');
var React = require('react');
var onClickOutside = require('react-onclickoutside');
var classNames = require('classnames');
var countryData = require('../country_data');
var allCountries = countryData.allCountries;

require('../styles.less');

if (typeof document !== "undefined") {
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


function trim(str) {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}

// function to check if string s1 starts with s2
function startsWith(s1, s2) {
    // could have done with s1.indexOf(s2) === 0. But indexOf is O(n)
    return s1.slice(0, s2.length) === s2;
}

function isNumberValid(inputNumber) {
    var countries = countryData.allCountries;
    return some(countries, function(country) {
        return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
    });
}

var ReactTelephoneInput = React.createClass({
    mixins: [onClickOutside],
    getInitialState: function() {
        var selectedCountryGuess, selectedCountryGuessIndex, inputNumber = this.props.value || '';

        if(trim(inputNumber) !== '') {
            selectedCountryGuess = this.guessSelectedCountry(inputNumber.replace(/\D/g, ''));
            if(!selectedCountryGuess || !selectedCountryGuess.name) {
                selectedCountryGuess = findWhere(allCountries, {iso2: this.props.defaultCountry})  || this.props.onlyCountries[0];
            }
        } else {
            selectedCountryGuess = findWhere(allCountries, {iso2: this.props.defaultCountry}) || this.props.onlyCountries[0];
        }

        selectedCountryGuessIndex = findIndex(allCountries, selectedCountryGuess);
        var formattedNumber = this.formatNumber(inputNumber.replace(/\D/g, ''), selectedCountryGuess ? selectedCountryGuess.format : null);
        var preferredCountries = [];

        preferredCountries = filter(allCountries, function(country) {
            return any(this.props.preferredCountries, function(preferredCountry) {
                return preferredCountry === country.iso2;
            });
        }, this);

        return {
            preferredCountries: preferredCountries,
            selectedCountry: selectedCountryGuess,
            // highlightCountry: selectedCountryGuess,
            highlightCountryIndex: selectedCountryGuessIndex,
            formattedNumber: formattedNumber,
            showDropDown: false,
            queryString: "",
            freezeSelection: false,
            debouncedQueryStingSearcher: debounce(this.searchCountry, 300)
        };
    },
    propTypes: {
        value: React.PropTypes.string,
        autoFormat: React.PropTypes.bool,
        defaultCountry: React.PropTypes.string,
        onlyCountries: React.PropTypes.arrayOf(React.PropTypes.string),
        preferredCountries: React.PropTypes.arrayOf(React.PropTypes.string),
        onChange: React.PropTypes.func,
        onEnterKeyPress: React.PropTypes.func
    },
    getDefaultProps: function() {

        return {
            value: '',
            autoFormat: true,
            onlyCountries: allCountries,
            defaultCountry: allCountries[0].iso2,
            isValid: isNumberValid,
            onEnterKeyPress: function () {}
        };
    },
    getNumber: function() {
        return this.state.formattedNumber !== '+' ? this.state.formattedNumber : '';
    },
    getValue: function() {
        return this.getNumber();
    },
    componentDidMount: function() {
        document.addEventListener('keydown', this.handleKeydown);

        this._cursorToEnd();

        this.props.onChange && this.props.onChange(this.state.formattedNumber);
    },
    componentWillUnmount: function() {
        document.removeEventListener('keydown', this.handleKeydown);
    },
    scrollTo: function(country, middle) {
        if(!country) return;

        var container = this.refs.flagDropdownList.getDOMNode();

        if(!container) return;

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
    formatNumber: function(text, pattern) {
        if(!text || text.length === 0) {
            return '+';
        }

        // for all strings with length less than 3, just return it (1, 2 etc.)
        // also return the same text if the selected country has no fixed format
        if((text && text.length < 2) || !pattern || !this.props.autoFormat) {
            return '+' + text;
        }

        var formattedObject = reduce(pattern, function(formattedObject, character, key) {
            if(formattedObject.remainingText.length === 0) {
                return formattedObject;
            }

            if(character !== '.') {
                return {
                    formattedText: formattedObject.formattedText + character,
                    remainingText: formattedObject.remainingText
                }
            }

            return {
                formattedText: formattedObject.formattedText + first(formattedObject.remainingText),
                remainingText: rest(formattedObject.remainingText)
            }
        }, {formattedText: "", remainingText: text.split('')});
        return formattedObject.formattedText + formattedObject.remainingText.join("");
    },

    // put the cursor to the end of the input (usually after a focus event)
    _cursorToEnd: function() {
        var input = this.refs.numberInput.getDOMNode();
        input.focus();
        if (isModernBrowser) {
            var len = input.value.length;
            input.setSelectionRange(len, len);
        }
    },
    // memoize results based on the first 5/6 characters. That is all that matters
    guessSelectedCountry: memoize(function(inputNumber) {
        return reduce(this.props.onlyCountries, function(selectedCountry, country) {
            if(startsWith(inputNumber, country.dialCode)) {
                if(country.dialCode.length > selectedCountry.dialCode.length) {
                    return country;
                }
                if(country.dialCode === selectedCountry.dialCode.length && country.priority < selectedCountry.priority) {
                    return country;
                }
            }

            return selectedCountry;
        }, {dialCode: '', priority: 10001}, this);
    }),
    getElement: function(index) {
        //console.log('index of country to jump to: ', index);
        return this.refs['flag_no_'+index].getDOMNode();
    },
    handleFlagDropdownClick: function() {
        // need to put the highlight on the current selected country if the dropdown is going to open up
        var self = this;
        this.setState({
            showDropDown: !this.state.showDropDown,
            highlightCountry: findWhere(this.props.onlyCountries, this.state.selectedCountry),
            highlightCountryIndex: findIndex(this.props.onlyCountries, this.state.selectedCountry)
        }, function() {
            self.scrollTo(self.getElement(self.state.highlightCountryIndex + self.state.preferredCountries.length));
        });
    },
    // TODO: handle
    handleInput: function(event) {

        var formattedNumber = '+', newSelectedCountry = this.state.selectedCountry, freezeSelection = this.state.freezeSelection;

        // if the input is the same as before, must be some special key like enter etc.
        if(event.target.value === this.state.formattedNumber) {
            return;
        }

        // ie hack
        event.preventDefault ? event.preventDefault() : event.returnValue = false;

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
                if(diff > 0) {
                    caretPosition = caretPosition - diff;
                }

                if(caretPosition > 0 && oldFormattedText.length >= formattedNumber.length) {
                    this.refs.numberInput.getDOMNode().setSelectionRange(caretPosition, caretPosition);
                }
            }

            if(this.props.onChange) {
                this.props.onChange(this.state.formattedNumber);
            }
        });

    },
    handleInputClick: function() {
        this.setState({showDropDown: false});
    },
    handleFlagItemClick: function(country, event) {
        var currentSelectedCountry = this.state.selectedCountry;
        // var nextSelectedCountry = this.props.onlyCountries[countryIndex];
        var nextSelectedCountry = findWhere(this.props.onlyCountries, country);
        var newNumber = this.state.formattedNumber.replace(currentSelectedCountry.dialCode, nextSelectedCountry.dialCode);
        var formattedNumber = this.formatNumber(newNumber.replace(/\D/g, ''), nextSelectedCountry.format);

        this.setState({
            showDropDown: false,
            selectedCountry: nextSelectedCountry,
            freezeSelection: true,
            formattedNumber: formattedNumber
        }, function() {
            this._cursorToEnd();
            this.props.onChange && this.props.onChange(formattedNumber);
        });
    },
    handleInputFocus: function() {
        // if the input is blank, insert dial code of the selected country
        if(this.refs.numberInput.getDOMNode().value === '+') {
            this.setState({formattedNumber: '+' + this.state.selectedCountry.dialCode});
        }
    },
    _findIndexOfCountry: function(allCountries, countryToFind, startIndex) {
        if(!startIndex) startIndex = 0;
        for(var i = startIndex; i < allCountries.length; i++) {
            if(allCountries[i].iso2 === countryToFind.iso2) {
                return i;
            }
        }
        return -1;
    },
    _getHighlightCountryIndex: function(direction) {
        // had to write own function because underscore does not have findIndex. lodash has it
        var highlightCountryIndex = this.state.highlightCountryIndex + direction;

        if(highlightCountryIndex < 0
            || highlightCountryIndex >= (this.props.onlyCountries.length  + this.state.preferredCountries.length)) {
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
    searchCountry: function() {
        var probableCandidate = this._searchCountry(this.state.queryString) || this.props.onlyCountries[0];
        var probableCandidateIndex = findIndex(this.props.onlyCountries, probableCandidate) + this.state.preferredCountries.length;
//console.log('probable candidate index: ', probableCandidateIndex);
//console.log('preferred country length: ', this.state.preferredCountries.length);
        this.scrollTo(this.getElement(probableCandidateIndex), true);

        this.setState({
            queryString: "",
            highlightCountryIndex: probableCandidateIndex
        });
    },
    handleKeydown: function(event) {
        if(!this.state.showDropDown) {
           return;
        }

        // ie hack
        event.preventDefault ? event.preventDefault() : event.returnValue = false;
        var self = this;
        function _moveHighlight(direction) {
            self.setState({
                highlightCountryIndex: self._getHighlightCountryIndex(direction)
            }, function() {
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
                    this.handleFlagItemClick(this.props.onlyCountries[this.state.highlightCountryIndex], event);
                    break;
            case keys.ESC:
                this.setState({showDropDown: false}, this._cursorToEnd);
                break;
            default:
                if((event.which >= keys.A && event.which <= keys.Z) || event.which === keys.SPACE) {
                    this.setState({queryString: this.state.queryString+String.fromCharCode(event.which)},
                        this.state.debouncedQueryStingSearcher);
                }
        }
    },
    handleInputKeyDown: function(event) {
        if(event.which === keys.ENTER) {
            this.props.onEnterKeyPress(event);
        }
    },
    handleBlur: function() {
        this.setState({
            showDropDown: false
        });
    },
    handleClickOutside: function(event) {
        var target = event.target;

        if(this.state.showDropDown) {
            this.handleBlur();
        }
    },
    render: function() {
        var dropDownClasses = classNames({
            "country-list": true,
            "hide": !this.state.showDropDown
        });
        var arrowClasses = classNames({
            "arrow": true,
            "up": this.state.showDropDown
        });
        var inputClasses = classNames({
            "form-control": true,
            "invalid-number": !this.props.isValid(this.state.formattedNumber.replace(/\D/g, ''))
        });

        var dashedLi = (<li key={"dashes"} className="divider" />);

        var countryDropDownList = map(this.state.preferredCountries.concat(this.props.onlyCountries), function(country, index) {
            var itemClasses = classNames({
                "country": true,
                "preferred": country.iso2 === 'us' || country.iso2 === 'gb',
                "active": country.iso2 === 'us',
                "highlight": this.state.highlightCountryIndex === index
            });

            return (
                <li
                    ref={"flag_no_" + index}
                    key={"flag_no_" + index}
                    data-flag-key={"flag_no_" + index}
                    className={itemClasses}
                    data-dial-code="1"
                    data-country-code={country.iso2}
                    onClick={this.handleFlagItemClick.bind(this, country)}>
                    <div className={"flag " + country.iso2} />
                    <span className="country-name">{country.name}</span>
                    <span className="dial-code">{'+'+country.dialCode}</span>
                </li>
            );
        }, this);

        // let's insert a dashed line in between preffered countries and the rest
        countryDropDownList.splice(this.state.preferredCountries.length, 0, dashedLi);

        var flagViewClasses = classNames({
            "flag-dropdown": true,
            "open-dropdown": this.state.showDropDown
        });

        return (
            <div className="react-tel-input">
                <input
                    onChange={this.handleInput}
                    onClick={this.handleInputClick}
                    onFocus={this.handleInputFocus}
                    onKeyDown={this.handleInputKeyDown}
                    value={this.state.formattedNumber}
                    ref="numberInput"
                    type="tel"
                    className={inputClasses}
                    placeholder="+1 (702) 123-4567"/>
                <div ref="flagDropDownButton" className={flagViewClasses} onKeyDown={this.handleKeydown} >
                    <div ref="selectedFlag" onClick={this.handleFlagDropdownClick} className="selected-flag" title={this.state.selectedCountry.name+": +" + this.state.selectedCountry.dialCode}>
                        <div className={"flag "+this.state.selectedCountry.iso2}>
                            <div className={arrowClasses}></div>
                        </div>
                    </div>

                    <ul ref="flagDropdownList" className={dropDownClasses}>
                        {countryDropDownList}
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = ReactTelephoneInput;
