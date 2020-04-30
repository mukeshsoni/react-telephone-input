import R from 'cramda';
import VirtualList from 'react-tiny-virtual-list';

import debounce from 'debounce';
import memoize from 'lodash.memoize';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import enhanceWithClickOutside from 'react-click-outside';
import countryData from 'country-telephone-data';
import formatNumber from './format_number';
import replaceCountryCode from './replace_country_code';
import isNumberValid from './number_validator';
import guessSelectedCountry from './guessSelectedCountry';

const { find, propEq, equals, findIndex, startsWith } = R;

const { allCountries, iso2Lookup } = countryData;
let isModernBrowser = true;

if (typeof document !== 'undefined') {
  isModernBrowser = Boolean(document.createElement('input').setSelectionRange);
} else {
  isModernBrowser = true;
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
  SPACE: 32,
};

function getDropdownListWidth() {
  const defaultWidth = 400;
  const horizontalMargin = 20;

  if (window.innerWidth - horizontalMargin < defaultWidth) {
    return window.innerWidth - horizontalMargin;
  } else {
    return defaultWidth;
  }
}

export class ReactTelephoneInput extends Component {
  static defaultProps = {
    autoFormat: true,
    onlyCountries: allCountries,
    defaultCountry: allCountries[0].iso2,
    isValid: isNumberValid,
    flagsImagePath: 'flags.png',
    onEnterKeyPress() {},
    preferredCountries: [],
    disabled: false,
    placeholder: '+1 (702) 123-4567',
    autoComplete: 'tel',
    required: false,
    inputProps: {},
    buttonProps: {},
    listItemClassName: 'country',
    listStyle: {
      zIndex: 20,
      backgroundColor: 'white',
    },
  };

  numberInputRef = null;

  constructor(props) {
    super(props);

    const preferredCountries = props.preferredCountries
      .map((iso2) =>
        Object.prototype.hasOwnProperty.call(iso2Lookup, iso2)
          ? allCountries[iso2Lookup[iso2]]
          : null,
      )
      .filter((val) => val !== null);

    this.state = {
      firstCall: true,
      preferredCountries,
      showDropDown: false,
      queryString: '',
      freezeSelection: false,
      debouncedQueryStingSearcher: debounce(this.searchCountry, 600),
    };
  }

  componentDidMount() {
    this._cursorToEnd(true);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !equals(nextProps, this.props) || !equals(nextState, this.state);
  }

  static getDerivedStateFromProps(props, state) {
    let inputNumber;
    const { onlyCountries } = props;
    const { showDropDown, preferredCountries, selectedCountry } = state;

    // don't calculate new state if the dropdown is open. We might be changing
    // the highlightCountryIndex using our keys
    if (showDropDown) {
      return state;
    }

    if (props.value) {
      inputNumber = props.value;
    } else if (props.initialValue && state.firstCall) {
      inputNumber = props.initialValue;
    } else if (props.value === null) {
      // just clear the value
      inputNumber = '';
    } else if (
      state &&
      state.formattedNumber &&
      state.formattedNumber.length > 0
    ) {
      inputNumber = state.formattedNumber;
    } else {
      inputNumber = '';
    }

    let selectedCountryGuess = guessSelectedCountry(
      inputNumber.replace(/\D/g, ''),
      props,
    );

    // if the guessed country has the same dialCode as the selected country in
    // our state, we give preference to the already selected country
    if (
      selectedCountry &&
      selectedCountryGuess.dialCode === selectedCountry.dialCode
    ) {
      selectedCountryGuess = selectedCountry;
    }

    const selectedCountryGuessIndex = findIndex(
      propEq('iso2', selectedCountryGuess.iso2),
      preferredCountries.concat(onlyCountries),
    );

    const formattedNumber = formatNumber(
      inputNumber.replace(/\D/g, ''),
      selectedCountryGuess ? selectedCountryGuess.format : null,
      props.autoFormat,
    );

    return {
      firstCall: false,
      selectedCountry: selectedCountryGuess,
      highlightCountryIndex: selectedCountryGuessIndex,
      formattedNumber,
    };
  }

  // put the cursor to the end of the input (usually after a focus event)
  _cursorToEnd = (skipFocus) => {
    const input = this.numberInputRef;
    if (skipFocus) {
      this._fillDialCode();
    } else {
      input.focus();

      if (isModernBrowser) {
        const len = input.value.length;
        input.setSelectionRange(len, len);
      }
    }
  };

  handleFlagDropdownClick = (e) => {
    if (this.props.disabled) {
      return;
    }

    e.preventDefault();
    const { preferredCountries, selectedCountry } = this.state;
    const { onlyCountries } = this.props;
    const highlightCountry = find(
      equals(this.state.selectedCountry),
      preferredCountries.concat(onlyCountries),
    );
    const highlightCountryIndex = findIndex(
      propEq('iso2', selectedCountry.iso2),
      preferredCountries.concat(onlyCountries),
    );

    // need to put the highlight on the current selected country if the dropdown is going to open up
    this.setState({
      showDropDown: !this.state.showDropDown,
      highlightCountry,
      highlightCountryIndex,
    });
  };

  handleInput = (event) => {
    let formattedNumber = '+';
    let newSelectedCountry = this.state.selectedCountry;
    let { freezeSelection } = this.state;

    // if the input is the same as before, must be some special key like enter, alt, command etc.
    if (event.target.value === this.state.formattedNumber) {
      return;
    }

    if (event.preventDefault) {
      event.preventDefault();
    } else {
      // ie hack
      event.returnValue = false; // eslint-disable-line no-param-reassign
    }

    if (event.target.value && event.target.value.length > 0) {
      // before entering the number in new format,
      // lets check if the dial code now matches some other country
      // replace all non-numeric characters from the input string
      const inputNumber = event.target.value.replace(/\D/g, '');

      // we don't need to send the whole number to guess the country...
      // only the first 6 characters are enough
      // the guess country function can then use memoization much more effectively
      // since the set of input it gets has drastically reduced
      if (
        !this.state.freezeSelection ||
        this.state.selectedCountry.dialCode.length > inputNumber.length
      ) {
        newSelectedCountry = guessSelectedCountry(
          inputNumber.substring(0, 6),
          this.props,
        );
        freezeSelection = false;
      }
      formattedNumber = formatNumber(
        inputNumber,
        newSelectedCountry.format,
        this.props.autoFormat,
      );
    }

    let caretPosition = event.target.selectionStart;
    const oldFormattedText = this.state.formattedNumber;
    const diff = formattedNumber.length - oldFormattedText.length;
    const selectedCountry =
      newSelectedCountry.dialCode.length > 0
        ? newSelectedCountry
        : this.state.selectedCountry;

    this.setState(
      {
        formattedNumber,
        freezeSelection,
        selectedCountry,
      },
      () => {
        if (isModernBrowser) {
          if (caretPosition === 1 && formattedNumber.length === 2) {
            caretPosition += 1;
          }

          if (diff > 0) {
            caretPosition -= diff;
          }

          if (
            caretPosition > 0 &&
            oldFormattedText.length >= formattedNumber.length
          ) {
            if (this.numberInputRef) {
              this.numberInputRef.setSelectionRange(
                caretPosition,
                caretPosition,
              );
            }
          }
        }

        if (this.props.onChange) {
          this.props.onChange(formattedNumber, selectedCountry);
        }
      },
    );
  };

  handleInputClick = () => {
    this.setState({ showDropDown: false });
  };

  handleFlagItemClick = (country) => {
    const { onlyCountries } = this.props;
    const currentSelectedCountry = this.state.selectedCountry;
    const nextSelectedCountry = find(
      (c) => c.iso2 === country.iso2,
      onlyCountries,
    );

    // tiny optimization
    if (
      nextSelectedCountry &&
      currentSelectedCountry.iso2 !== nextSelectedCountry.iso2
    ) {
      const newNumber = replaceCountryCode(
        currentSelectedCountry,
        nextSelectedCountry,
        this.state.formattedNumber.replace(/\D/g, ''), // let's convert formatted number to just numbers for easy find/replace
      );

      const formattedNumber = formatNumber(
        newNumber,
        nextSelectedCountry.format,
        this.props.autoFormat,
      );

      this.setState(
        {
          showDropDown: false,
          selectedCountry: nextSelectedCountry,
          freezeSelection: true,
          formattedNumber,
        },
        () => {
          this._cursorToEnd();
          if (this.props.onChange) {
            this.props.onChange(formattedNumber, nextSelectedCountry);
          }
        },
      );
    } else {
      this.setState({ showDropDown: false });
    }
  };

  handleInputFocus = () => {
    // trigger parent component's onFocus handler
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(
        this.state.formattedNumber,
        this.state.selectedCountry,
      );
    }

    this._fillDialCode();
  };

  _fillDialCode = () => {
    // if the input is blank, insert dial code of the selected country
    if (this.numberInputRef && this.numberInputRef.value === '+') {
      this.setState({
        formattedNumber: `+${this.state.selectedCountry.dialCode}`,
      });
    }
  };

  _getHighlightCountryIndex = (direction) => {
    const { onlyCountries } = this.props;
    const { highlightCountryIndex, preferredCountries } = this.state;

    // had to write own function because underscore does not have findIndex. lodash has it
    const newHighlightCountryIndex = highlightCountryIndex + direction;

    if (
      newHighlightCountryIndex < 0 ||
      newHighlightCountryIndex >=
        onlyCountries.length + preferredCountries.length
    ) {
      return newHighlightCountryIndex - direction;
    }

    return newHighlightCountryIndex;
  };

  // memoize search results... caching all the way
  _searchCountry = memoize(function searchCountry(queryString) {
    if (!queryString || queryString.length === 0) {
      return null;
    }
    // don't include the preferred countries in search
    const probableCountries = this.props.onlyCountries.filter(
      (country) =>
        startsWith(queryString.toLowerCase(), country.name.toLowerCase()),
      this,
    );
    return probableCountries[0];
  });

  searchCountry = () => {
    const probableCandidate =
      this._searchCountry(this.state.queryString) ||
      this.props.onlyCountries[0];
    const probableCandidateIndex =
      findIndex(
        propEq('iso2', probableCandidate.iso2),
        this.props.onlyCountries,
      ) + this.state.preferredCountries.length;

    this.setState({
      queryString: '',
      highlightCountryIndex: probableCandidateIndex,
    });
  };

  handleKeydown = (event) => {
    if (!this.state.showDropDown || event.metaKey || event.altKey) {
      return;
    }

    // ie hack
    if (event.preventDefault) {
      event.preventDefault();
    } else {
      event.returnValue = false; // eslint-disable-line no-param-reassign
    }

    const self = this;
    function _moveHighlight(direction) {
      const highlightCountryIndex = self._getHighlightCountryIndex(direction);

      self.setState({
        highlightCountryIndex,
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
        this.handleFlagItemClick(
          this.state.preferredCountries.concat(this.props.onlyCountries)[
            this.state.highlightCountryIndex
          ],
          event,
        );
        break;
      case keys.ESC:
        this.setState({ showDropDown: false }, this._cursorToEnd);
        break;
      default:
        if (
          (event.which >= keys.A && event.which <= keys.Z) ||
          event.which === keys.SPACE
        ) {
          this.setState(
            {
              queryString:
                this.state.queryString + String.fromCharCode(event.which),
            },
            this.state.debouncedQueryStingSearcher,
          );
        }
    }
  };

  handleInputKeyDown = (event) => {
    if (
      event.which === keys.ENTER &&
      typeof this.props.onEnterKeyPress === 'function'
    ) {
      this.props.onEnterKeyPress(event);
    }
  };

  handleClickOutside = () => {
    if (this.state.showDropDown) {
      this.setState({
        showDropDown: false,
      });
    }
  };

  getCountryDropDownList = () => {
    const { highlightCountryIndex, preferredCountries } = this.state;
    const data = preferredCountries.concat(this.props.onlyCountries);

    return (
      <VirtualList
        width={getDropdownListWidth()}
        height={300}
        itemCount={data.length}
        itemSize={40}
        style={this.props.listStyle}
        className="country-list"
        scrollToIndex={highlightCountryIndex}
        scrollToAlignment="center"
        renderItem={({ index, style }) => {
          const country = data[index];
          const itemClasses = classNames(this.props.listItemClassName, {
            preferred:
              findIndex(
                propEq('iso2', country.iso2),
                this.state.preferredCountries,
              ) >= 0,
            highlight: this.state.highlightCountryIndex === index,
          });

          const inputFlagClasses = `flag ${country.iso2}`;

          return (
            <div
              key={`flag_no_${index}`}
              data-flag-key={`flag_no_${index}`}
              className={itemClasses}
              data-dial-code={country.dialCode}
              data-country-code={country.iso2}
              onClick={this.handleFlagItemClick.bind(this, country)}
              style={style}
              title={`${country.name} - ${country.dialCode}`}
              data-test-id="src_reacttelephoneinput_test_id_0"
            >
              <div
                className={inputFlagClasses}
                style={this.getFlagStyle()}
                data-test-id="src_reacttelephoneinput_test_id_1"
              />
              <span
                className="country-name"
                data-test-id="src_reacttelephoneinput_test_id_2"
              >
                {country.name}
              </span>
              <span
                className="dial-code"
                data-test-id="src_reacttelephoneinput_test_id_3"
              >{`+${country.dialCode}`}</span>
            </div>
          );
        }}
      />
    );
  };

  getFlagStyle = () => {
    if (this.props.flagsImagePath) {
      return {
        backgroundImage: `url(${this.props.flagsImagePath})`,
      };
    }
    return {};
  };

  handleInputBlur = () => {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(this.state.formattedNumber, this.state.selectedCountry);
    }
  };

  handleFlagKeyDown = (event) => {
    // only trigger dropdown click if the dropdown is not already open.
    // it will otherwise interfere with key up/down of list
    if (event.which === keys.DOWN && this.state.showDropDown === false) {
      this.handleFlagDropdownClick(event);
    }
  };

  render() {
    const { selectedCountry } = this.state;

    const arrowClasses = classNames({
      arrow: true,
      up: this.state.showDropDown,
    });
    const inputClasses = classNames({
      'form-control': true,
      'invalid-number': !this.props.isValid(
        this.state.formattedNumber.replace(/\D/g, ''),
      ),
    });

    const flagViewClasses = classNames({
      'flag-dropdown': true,
      'open-dropdown': this.state.showDropDown,
    });

    const inputFlagClasses = `flag ${selectedCountry.iso2}`;
    const { buttonProps } = this.props;
    const otherProps = this.props.inputProps;
    if (this.props.inputId) {
      otherProps.id = this.props.inputId;
    }

    return (
      <div
        className={classNames(
          'react-tel-input',
          this.props.classNames,
          this.props.className,
        )}
        data-test-id="src_reacttelephoneinput_test_id_4"
      >
        <div
          className={flagViewClasses}
          onKeyDown={this.handleKeydown}
          data-test-id="src_reacttelephoneinput_test_id_6"
        >
          <button
            onClick={this.handleFlagDropdownClick}
            className="selected-flag"
            title={`${selectedCountry.name}: + ${selectedCountry.dialCode}`}
            data-test-id="src_reacttelephoneinput_test_id_7"
            onKeyDown={this.handleFlagKeyDown}
            type="button"
            {...buttonProps}
          >
            <div
              className={inputFlagClasses}
              style={this.getFlagStyle()}
              data-test-id="src_reacttelephoneinput_test_id_8"
            >
              <div
                className={arrowClasses}
                data-test-id="src_reacttelephoneinput_test_id_9"
              />
            </div>
          </button>
          {this.state.showDropDown ? this.getCountryDropDownList() : ''}
        </div>
        <input
          onChange={this.handleInput}
          onClick={this.handleInputClick}
          onFocus={this.handleInputFocus}
          onBlur={this.handleInputBlur}
          onKeyDown={this.handleInputKeyDown}
          value={this.state.formattedNumber}
          ref={(node) => {
            this.numberInputRef = node;
          }}
          type="tel"
          className={inputClasses}
          autoComplete={this.props.autoComplete}
          pattern={this.props.pattern}
          required={this.props.required}
          placeholder={this.props.placeholder}
          disabled={this.props.disabled}
          {...otherProps}
          data-test-id="src_reacttelephoneinput_test_id_5"
        />
      </div>
    );
  }
}

ReactTelephoneInput.propTypes = {
  value: PropTypes.string,
  initialValue: PropTypes.string,
  autoFormat: PropTypes.bool,
  defaultCountry: PropTypes.string,
  isValid: PropTypes.func,
  onlyCountries: PropTypes.arrayOf(PropTypes.object),
  preferredCountries: PropTypes.arrayOf(PropTypes.string),
  flagsImagePath: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
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
  inputProps: PropTypes.object,
  buttonProps: PropTypes.object,
  listStyle: PropTypes.object,
  listItemClassName: PropTypes.string,
};

export default enhanceWithClickOutside(ReactTelephoneInput);
