import R from 'cramda'
import VirtualList from 'react-tiny-virtual-list'

import debounce from 'debounce'
import memoize from 'lodash.memoize'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import enhanceWithClickOutside from 'react-click-outside'
import countryData from 'country-telephone-data'
import formatNumber from './format_number'
import replaceCountryCode from './replace_country_code'
import isNumberValid from './number_validator'

const { find, propEq, equals, findIndex, startsWith } = R

const { allCountries, iso2Lookup, allCountryCodes } = countryData
let isModernBrowser = true

if (typeof document !== 'undefined') {
  isModernBrowser = Boolean(document.createElement('input').setSelectionRange)
} else {
  isModernBrowser = true
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
}

function getDropdownListWidth() {
  const defaultWidth = 400
  const horizontalMargin = 20

  if (window.innerWidth - horizontalMargin < defaultWidth) {
    return window.innerWidth - horizontalMargin
  } else {
    return defaultWidth
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
      backgroundColor: 'white'
    }
  }

  numberInputRef = null

  constructor(props) {
    super(props)

    const preferredCountries = props.preferredCountries
      .map(
        iso2 =>
          Object.prototype.hasOwnProperty.call(iso2Lookup, iso2)
            ? allCountries[iso2Lookup[iso2]]
            : null
      )
      .filter(val => val !== null)

    this.state = {
      preferredCountries,
      showDropDown: false,
      queryString: '',
      freezeSelection: false,
      debouncedQueryStingSearcher: debounce(this.searchCountry, 600),
      ...this._mapPropsToState(props, true)
    }
  }

  componentDidMount() {
    this._cursorToEnd(true)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !equals(nextProps, this.props) || !equals(nextState, this.state)
  }

  componentWillReceiveProps(nextProps) {
    this.setState(this._mapPropsToState(nextProps))
  }

  // put the cursor to the end of the input (usually after a focus event)
  _cursorToEnd = skipFocus => {
    const input = this.numberInputRef
    if (skipFocus) {
      this._fillDialCode()
    } else {
      input.focus()

      if (isModernBrowser) {
        const len = input.value.length
        input.setSelectionRange(len, len)
      }
    }
  }

  // memoize results based on the first 5/6 characters. That is all that matters
  guessSelectedCountry = inputNumber => {
    const { defaultCountry, onlyCountries } = this.props

    const secondBestGuess =
      find(propEq('iso2', defaultCountry), allCountries) || this.props.onlyCountries[0]

    const inputNumberForCountries = inputNumber.substr(0, 4)
    let bestGuess

    if (inputNumber.trim() !== '') {
      bestGuess = onlyCountries.reduce(
        (selectedCountry, country) => {
          // if the country dialCode exists WITH area code

          if (
            allCountryCodes[inputNumberForCountries] &&
            allCountryCodes[inputNumberForCountries][0] === country.iso2
          ) {
            return country

            // if the selected country dialCode is there with the area code
          } else if (
            allCountryCodes[inputNumberForCountries] &&
            allCountryCodes[inputNumberForCountries][0] === selectedCountry.iso2
          ) {
            return selectedCountry

            // else do the original if statement
          }
          if (startsWith(country.dialCode, inputNumber)) {
            if (country.dialCode.length > selectedCountry.dialCode.length) {
              return country
            }
            if (
              country.dialCode.length === selectedCountry.dialCode.length &&
              country.priority < selectedCountry.priority
            ) {
              return country
            }
          }

          return selectedCountry
        },
        { dialCode: '', priority: 10001 },
        this
      )
    } else {
      return secondBestGuess
    }

    if (!bestGuess || !bestGuess.name) {
      return secondBestGuess
    }

    return bestGuess
  }

  handleFlagDropdownClick = e => {
    if (this.props.disabled) {
      return
    }

    e.preventDefault()
    const { preferredCountries, selectedCountry } = this.state
    const { onlyCountries } = this.props

    // need to put the highlight on the current selected country if the dropdown is going to open up
    this.setState({
      showDropDown: !this.state.showDropDown,
      highlightCountry: find(equals(this.state.selectedCountry), this.props.onlyCountries),
      highlightCountryIndex: findIndex(
        propEq('iso2', selectedCountry.iso2),
        preferredCountries.concat(onlyCountries)
      )
    })
  }

  handleInput = event => {
    let formattedNumber = '+'
    let newSelectedCountry = this.state.selectedCountry
    let { freezeSelection } = this.state

    // if the input is the same as before, must be some special key like enter, alt, command etc.
    if (event.target.value === this.state.formattedNumber) {
      return
    }

    if (event.preventDefault) {
      event.preventDefault()
    } else {
      // ie hack
      event.returnValue = false // eslint-disable-line no-param-reassign
    }

    if (event.target.value && event.target.value.length > 0) {
      // before entering the number in new format,
      // lets check if the dial code now matches some other country
      // replace all non-numeric characters from the input string
      const inputNumber = event.target.value.replace(/\D/g, '')

      // we don't need to send the whole number to guess the country...
      // only the first 6 characters are enough
      // the guess country function can then use memoization much more effectively
      // since the set of input it gets has drastically reduced
      if (
        !this.state.freezeSelection ||
        this.state.selectedCountry.dialCode.length > inputNumber.length
      ) {
        newSelectedCountry = this.guessSelectedCountry(inputNumber.substring(0, 6))
        freezeSelection = false
      }
      formattedNumber = formatNumber(inputNumber, newSelectedCountry.format, this.props.autoFormat)
    }

    let caretPosition = event.target.selectionStart
    const oldFormattedText = this.state.formattedNumber
    const diff = formattedNumber.length - oldFormattedText.length
    const selectedCountry =
      newSelectedCountry.dialCode.length > 0 ? newSelectedCountry : this.state.selectedCountry

    this.setState(
      {
        formattedNumber,
        freezeSelection,
        selectedCountry
      },
      () => {
        if (isModernBrowser) {
          if (caretPosition === 1 && formattedNumber.length === 2) {
            caretPosition += 1
          }

          if (diff > 0) {
            caretPosition -= diff
          }

          if (caretPosition > 0 && oldFormattedText.length >= formattedNumber.length) {
            if (this.numberInputRef) {
              this.numberInputRef.setSelectionRange(caretPosition, caretPosition)
            }
          }
        }

        if (this.props.onChange) {
          this.props.onChange(formattedNumber, selectedCountry)
        }
      }
    )
  }

  handleInputClick = () => {
    this.setState({ showDropDown: false })
  }

  handleFlagItemClick = country => {
    const currentSelectedCountry = this.state.selectedCountry
    const nextSelectedCountry = find(equals(country), this.props.onlyCountries)

    // tiny optimization
    if (currentSelectedCountry.iso2 !== nextSelectedCountry.iso2) {
      const newNumber = replaceCountryCode(
        currentSelectedCountry,
        nextSelectedCountry,
        this.state.formattedNumber.replace(/\D/g, '') // let's convert formatted number to just numbers for easy find/replace
      )

      const formattedNumber = formatNumber(
        newNumber,
        nextSelectedCountry.format,
        this.props.autoFormat
      )

      this.setState(
        {
          showDropDown: false,
          selectedCountry: nextSelectedCountry,
          freezeSelection: true,
          formattedNumber
        },
        () => {
          this._cursorToEnd()
          if (this.props.onChange) {
            this.props.onChange(formattedNumber, nextSelectedCountry)
          }
        }
      )
    } else {
      this.setState({ showDropDown: false })
    }
  }

  handleInputFocus = () => {
    // trigger parent component's onFocus handler
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(this.state.formattedNumber, this.state.selectedCountry)
    }

    this._fillDialCode()
  }

  _mapPropsToState = (props, firstCall = false) => {
    let inputNumber

    if (props.value) {
      inputNumber = props.value
    } else if (props.initialValue && firstCall) {
      inputNumber = props.initialValue
    } else if (this.props.value) {
      // just clear the value
      inputNumber = ''
    } else if (this.state && this.state.formattedNumber && this.state.formattedNumber.length > 0) {
      inputNumber = this.state.formattedNumber
    } else {
      inputNumber = ''
    }

    const selectedCountryGuess = this.guessSelectedCountry(inputNumber.replace(/\D/g, ''))
    const selectedCountryGuessIndex = findIndex(
      propEq('iso2', selectedCountryGuess.iso2),
      allCountries
    )
    const formattedNumber = formatNumber(
      inputNumber.replace(/\D/g, ''),
      selectedCountryGuess ? selectedCountryGuess.format : null,
      this.props.autoFormat
    )

    return {
      selectedCountry: selectedCountryGuess,
      highlightCountryIndex: selectedCountryGuessIndex,
      formattedNumber
    }
  }

  _fillDialCode = () => {
    // if the input is blank, insert dial code of the selected country
    if (this.numberInputRef && this.numberInputRef.value === '+') {
      this.setState({
        formattedNumber: `+${this.state.selectedCountry.dialCode}`
      })
    }
  }

  _getHighlightCountryIndex = direction => {
    // had to write own function because underscore does not have findIndex. lodash has it
    const highlightCountryIndex = this.state.highlightCountryIndex + direction

    if (
      highlightCountryIndex < 0 ||
      highlightCountryIndex >=
        this.props.onlyCountries.length + this.state.preferredCountries.length
    ) {
      return highlightCountryIndex - direction
    }

    return highlightCountryIndex
  }

  // memoize search results... caching all the way
  _searchCountry = memoize(function searchCountry(queryString) {
    if (!queryString || queryString.length === 0) {
      return null
    }
    // don't include the preferred countries in search
    const probableCountries = this.props.onlyCountries.filter(
      country => startsWith(queryString.toLowerCase(), country.name.toLowerCase()),
      this
    )
    return probableCountries[0]
  })

  searchCountry = () => {
    const probableCandidate =
      this._searchCountry(this.state.queryString) || this.props.onlyCountries[0]
    const probableCandidateIndex =
      findIndex(propEq('iso2', probableCandidate.iso2), this.props.onlyCountries) +
      this.state.preferredCountries.length

    this.setState({
      queryString: '',
      highlightCountryIndex: probableCandidateIndex
    })
  }

  handleKeydown = event => {
    if (!this.state.showDropDown || event.metaKey || event.altKey) {
      return
    }

    // ie hack
    if (event.preventDefault) {
      event.preventDefault()
    } else {
      event.returnValue = false // eslint-disable-line no-param-reassign
    }

    const self = this
    function _moveHighlight(direction) {
      self.setState({
        highlightCountryIndex: self._getHighlightCountryIndex(direction)
      })
    }

    switch (event.which) {
      case keys.DOWN:
        _moveHighlight(1)
        break
      case keys.UP:
        _moveHighlight(-1)
        break
      case keys.ENTER:
        this.handleFlagItemClick(
          this.state.preferredCountries.concat(this.props.onlyCountries)[
            this.state.highlightCountryIndex
          ],
          event
        )
        break
      case keys.ESC:
        this.setState({ showDropDown: false }, this._cursorToEnd)
        break
      default:
        if ((event.which >= keys.A && event.which <= keys.Z) || event.which === keys.SPACE) {
          this.setState(
            {
              queryString: this.state.queryString + String.fromCharCode(event.which)
            },
            this.state.debouncedQueryStingSearcher
          )
        }
    }
  }

  handleInputKeyDown = event => {
    if (event.which === keys.ENTER) {
      typeof this.props.onEnterKeyPress === 'function' && this.props.onEnterKeyPress(event)
    }
  }

  handleClickOutside = () => {
    if (this.state.showDropDown) {
      this.setState({
        showDropDown: false
      })
    }
  }

  getCountryDropDownList = () => {
    const data = this.state.preferredCountries.concat(this.props.onlyCountries)

    return (
      <VirtualList
        width={getDropdownListWidth()}
        height={300}
        itemCount={data.length}
        itemSize={40}
        style={this.props.listStyle}
        className="country-list"
        scrollToIndex={this.state.highlightCountryIndex}
        scrollToAlignment="center"
        renderItem={({ index, style }) => {
          const country = data[index]
          const itemClasses = classNames(this.props.listItemClassName, {
            preferred: findIndex(propEq('iso2', country.iso2), this.state.preferredCountries) >= 0,
            highlight: this.state.highlightCountryIndex === index
          })

          const inputFlagClasses = `flag ${country.iso2}`

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
              <span className="country-name" data-test-id="src_reacttelephoneinput_test_id_2">
                {country.name}
              </span>
              <span className="dial-code" data-test-id="src_reacttelephoneinput_test_id_3">{`+${
                country.dialCode
              }`}</span>
            </div>
          )
        }}
      />
    )
  }

  getFlagStyle = () => {
    if (this.props.flagsImagePath) {
      return {
        backgroundImage: `url(${this.props.flagsImagePath})`
      }
    }
    return {}
  }

  handleInputBlur = () => {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(this.state.formattedNumber, this.state.selectedCountry)
    }
  }

  handleFlagKeyDown = event => {
    // only trigger dropdown click if the dropdown is not already open.
    // it will otherwise interfere with key up/down of list
    if (event.which === keys.DOWN && this.state.showDropDown === false) {
      this.handleFlagDropdownClick(event)
    }
  }

  render() {
    const arrowClasses = classNames({
      arrow: true,
      up: this.state.showDropDown
    })
    const inputClasses = classNames({
      'form-control': true,
      'invalid-number': !this.props.isValid(this.state.formattedNumber.replace(/\D/g, ''))
    })

    const flagViewClasses = classNames({
      'flag-dropdown': true,
      'open-dropdown': this.state.showDropDown
    })

    const inputFlagClasses = `flag ${this.state.selectedCountry.iso2}`
    const buttonProps = this.props.buttonProps
    const otherProps = this.props.inputProps
    if (this.props.inputId) {
      otherProps.id = this.props.inputId
    }    

    return (
      <div
        className={classNames('react-tel-input', this.props.classNames, this.props.className)}
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
            title={`${this.state.selectedCountry.name}: + ${this.state.selectedCountry.dialCode}`}
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
              <div className={arrowClasses} data-test-id="src_reacttelephoneinput_test_id_9" />
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
          ref={node => {
            this.numberInputRef = node
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
    )
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
  listItemClassName: PropTypes.string
}

export default enhanceWithClickOutside(ReactTelephoneInput)
