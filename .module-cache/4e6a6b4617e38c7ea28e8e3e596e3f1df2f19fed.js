/**
 * @jsx React.DOM
 */

;(function(root, name, definition) {
    if (typeof define === 'function' && define.amd) {
        define([], definition);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = definition();
    } else {
        root[name] = definition();
    }
})(this, 'react-telephone-input', function() {
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

    // function to check if string s1 starts with s2
    function startsWith(s1, s2) {
        // could have done with s1.indexOf(s2) === 0. But indexOf is O(n)
        return s1.slice(0, s2.length) === s2;
    }

    function isNumberValid(inputNumber) {
        var countries = pp.userSettings.data.allCountries;
        return _.some(countries, function(country) {
            return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
        });
    }

    var FlagBearer = React.createClass({displayName: 'FlagBearer',
        getInitialState: function() {
            var selectedCountryGuess, inputNumber = this.props.value || '';

            if($.trim(inputNumber) !== '') {
                selectedCountryGuess = this.guessSelectedCountry(inputNumber.replace(/\D/g, ''));
                if(!selectedCountryGuess || !selectedCountryGuess.name) {
                    selectedCountryGuess = _.findWhere(pp.userSettings.data.allCountries, {iso2: this.props.defaultCountry})  || this.props.countries[0];
                }
            } else {
                selectedCountryGuess = _.findWhere(pp.userSettings.data.allCountries, {iso2: this.props.defaultCountry}) || this.props.countries[0];
            }

            var formattedNumber = this.formatNumber(inputNumber.replace(/\D/g, ''), selectedCountryGuess ? selectedCountryGuess.format : null);

            return {
                selectedCountry: selectedCountryGuess,
                highlightCountry: selectedCountryGuess,
                formattedNumber: formattedNumber,
                showDropDown: false,
                queryString: "",
                freezeSelection: false,
                debouncedQueryStingSearcher: _.debounce(this.searchCountry, 300),
                isModernBrowser: Boolean(document.createElement('input').setSelectionRange)
            };
        },
        getNumber: function() {
            return this.state.formattedNumber !== '+' ? this.state.formattedNumber : '';
        },
        getValue: function() {
            return this.getNumber();
        },
        getDefaultProps: function() {
            return {
                value: '',
                countries: pp.userSettings.data.allCountries,
                defaultCountry: pp.userSettings.data.allCountries[0].iso2,
                preferredCountriesIndex: pp.userSettings.data.preferredCountriesIndex,
                isValid: isNumberValid,
            };
        },
        attachPopover: function(element) {
            if(element) {
                $(element).ppTooltip({
                    hide: false,
                    show: {delay: 50}
                });
            }
        },
        componentDidMount: function() {
            $(document).on('keydown', this.handleKeydown);
            $(document).on('click', this.handleDocumentClick);

            this._cursorToEnd();

            this.props.onChange && this.props.onChange(this.state.formattedNumber);
            this.attachPopover(this.refs.selectedFlag.getDOMNode());
        },
        formatNumber: function(text, pattern) {
            if(!text || text.length === 0) {
                return '+';
            }

            // for all strings with length less than 3, just return it (1, 2 etc.)
            // also return the same text if the selected country has no fixed format
            if((text && text.length < 2) || !pattern) {
                return '+' + text;
            }

            var formattedObject = _.reduce(pattern, function(formattedObject, character, key) {
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
                    formattedText: formattedObject.formattedText + _.first(formattedObject.remainingText),
                    remainingText: _.rest(formattedObject.remainingText)
                }
            }, {formattedText: "", remainingText: text.split('')});

            return formattedObject.formattedText + formattedObject.remainingText.join("");
        },

        // put the cursor to the end of the input (usually after a focus event)
        _cursorToEnd: function() {
            var input = this.refs.numberInput.getDOMNode();
            input.focus();
            if (this.state.isModernBrowser) {
                var len = input.value.length;
                input.setSelectionRange(len, len);
            }
        },
        // sroll to the country list item in the dropdown
        _scrollTo: function(country, middle, discardPreferredCountries) {
            if(!country) return;

            var container = $('.country-list');
            var containerHeight = container.height();
            var containerTop = container.offset().top;
            var containerBottom = containerTop + containerHeight;

            var element = container.find('li[data-country-code="' + country.iso2 + '"]');

            // in case there is also a preferred country to scroll to and we are asked to discard it
            if(discardPreferredCountries && element.length > 1) {
                element = element[1];
            }

            var elementHeight = element.outerHeight();
            var elementTop = element.offset().top;
            var elementBottom = elementTop + elementHeight;
            var newScrollTop = elementTop - containerTop + container.scrollTop();
            var middleOffset = (containerHeight / 2) - (elementHeight / 2);

            if (elementTop < containerTop) {
                // scroll up
                if (middle) {
                    newScrollTop -= middleOffset;
                }
                container.scrollTop(newScrollTop);
            } else if (elementBottom > containerBottom) {
                // scroll down
                if(middle) {
                    newScrollTop += middleOffset;
                }
                var heightDifference = containerHeight - elementHeight;
                container.scrollTop(newScrollTop - heightDifference);
            }
        },
        // memoize results based on the first 5/6 characters. That is all that matters
        guessSelectedCountry: _.memoize(function(inputNumber) {
            return _.reduce(this.props.countries, function(selectedCountry, country) {
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
        handleFlagDropdownClick: function() {
            // need to put the highlight on the current selected country if the dropdown is going to open up
            this.setState({
                showDropDown: !this.state.showDropDown,
                highlightCountry: _.findWhere(this.props.countries, this.state.selectedCountry)
            }, function() {
                this._scrollTo(this.state.highlightCountry);
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
                if(this.state.isModernBrowser) {
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
            var nextSelectedCountry = _.findWhere(this.props.countries, country);
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
        _getHighlightCountry: function(direction) {
            // had to write own function because underscore does not have findIndex. lodash has it
            var maybeHighlightIndex = this._findIndexOfCountry(this.props.countries, this.state.highlightCountry, this.props.preferredCountriesIndex) + direction;

            if(maybeHighlightIndex < 0 || maybeHighlightIndex === this.props.countries.length) {
                return this.props.countries[this._findIndexOfCountry(this.props.countries, this.state.highlightCountry)];
            }

            return this.props.countries[maybeHighlightIndex];
        },
        // memoize search results... caching all the way
        _searchCountry: _.memoize(function(queryString) {
            if(!queryString || queryString.length === 0) {
                return null;
            }
            // don't include the preferred countries in search
            var probableCountries = _.filter(_.rest(this.props.countries, this.props.preferredCountriesIndex), function(country) {
                return startsWith(country.name.toLowerCase(), queryString.toLowerCase());
            }, this);
            return probableCountries[0];
        }),
        searchCountry: function() {
            var probableCandidate = this._searchCountry(this.state.queryString) || this.props.countries[0];

            this._scrollTo(probableCandidate, true, true);
            this.setState({
                queryString: "",
                highlightCountry: probableCandidate
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
                    highlightCountry: self._getHighlightCountry(direction)
                }, function() {
                    self._scrollTo(self.state.highlightCountry, true, true);
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
                        this.handleFlagItemClick(this.state.highlightCountry, event);
                        break;
                case keys.ESC:
                    this.setState({showDropDown: false}, this._cursorToEnd);
                default:
                    if((event.which >= keys.A && event.which <= keys.Z) || event.which === keys.SPACE) {
                        this.setState({queryString: this.state.queryString+String.fromCharCode(event.which)},
                            this.state.debouncedQueryStingSearcher);
                    }
            }
        },
        handleInputKeyDown: function(event) {
            if(event.which === keys.ENTER) {
                this.props.onEnterKeyPress();
            }
        },
        handleBlur: function() {
            this.setState({
                showDropDown: false
            });
        },
        isFlagDropDownButtonClicked: function(target) {
            if(!this.refs.flagDropDownButton) return false;


            var flagDropDownButton = this.refs.flagDropDownButton.getDOMNode();
            return $(flagDropDownButton).is(target) || $(flagDropDownButton).has(target).length > 0;
        },
        isFlagItemClicked: function(target) {
            if(!this.refs.flagDropdownList) return false;

            var dropDownList = this.refs.flagDropdownList.getDOMNode();
            return $(dropDownList).is(target) || $(dropDownList).has(target).length > 0;
        },
        handleDocumentClick: function(event) {
            // var target = (event.currentTarget) ? event.currentTarget : event.srcElement;
            var target = event.target;

            if(!this.isFlagDropDownButtonClicked(target) && !this.isFlagItemClicked(target) && this.state.showDropDown) {
                this.handleBlur();
            }
        },
        render: function() {
            window.allCountries = pp.userSettings.data.allCountries;
            var cx = React.addons.classSet;
            var dropDownClasses = cx({
                "country-list": true,
                "hide": !this.state.showDropDown
            });
            var arrowClasses = cx({
                "arrow": true,
                "up": this.state.showDropDown
            });
            var inputClasses = cx({
                "form-control": true,
                "invalid-number": !this.props.isValid(this.state.formattedNumber.replace(/\D/g, ''))
            });

            var dashedLi = (React.createElement("li", {key: "dashes", className: "divider"}));

            var countryDropDownList = _.map(this.props.countries, function(country, index) {
                var itemClasses = cx({
                    "country": true,
                    "preferred": country.iso2 === 'us' || country.iso2 === 'gb',
                    "active": country.iso2 === 'us',
                    "highlight": _.isEqual(this.state.highlightCountry, country)
                });

                return (
                    React.createElement("li", {
                        key: "flag_no_" + index, 
                        className: itemClasses, 
                        'data-dial-code': "1", 
                        'data-country-code': country.iso2, 
                        onClick: this.handleFlagItemClick.bind(this, country)}, 
                        React.createElement("div", {className: "flag " + country.iso2}), 
                        React.createElement("span", {className: "country-name"}, country.name), 
                        React.createElement("span", {className: "dial-code"}, '+'+country.dialCode)
                    )
                );
            }, this);

            // let's insert a dashed line in between preffered countries and the rest
            countryDropDownList.splice(this.props.preferredCountriesIndex, 0, dashedLi);

            var flagViewClasses = cx({
                "flag-dropdown": true,
                "open-dropdown": this.state.showDropDown
            });

            return (
                React.createElement("div", {className: "intl-tel-input"}, 
                    React.createElement("input", {
                        onChange: this.handleInput, 
                        onClick: this.handleInputClick, 
                        onFocus: this.handleInputFocus, 
                        onKeyDown: this.handleInputKeyDown, 
                        value: this.state.formattedNumber, 
                        ref: "numberInput", 
                        type: "tel", 
                        className: inputClasses, 
                        placeholder: "+1 (702) 123-4567"}), 
                    React.createElement("div", {ref: "flagDropDownButton", className: flagViewClasses, onKeyDown: this.handleKeydown}, 
                        React.createElement("div", {ref: "selectedFlag", onClick: this.handleFlagDropdownClick, className: "selected-flag", title: this.state.selectedCountry.name+": +" + this.state.selectedCountry.dialCode}, 
                            React.createElement("div", {className: "flag "+this.state.selectedCountry.iso2}, 
                                React.createElement("div", {className: arrowClasses})
                            )
                        ), 

                        React.createElement("ul", {ref: "flagDropdownList", className: dropDownClasses}, 
                            countryDropDownList
                        )
                    )
                )
            );
        }
    });

    return FlagBearer;
});    
