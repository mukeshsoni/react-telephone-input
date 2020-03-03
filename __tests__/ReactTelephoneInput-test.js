import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import TestUtils from 'react-dom/test-utils'
import countryData from 'country-telephone-data'
import toJson, { createSerializer } from 'enzyme-to-json'
import guessSelectedCountry from '../src/guessSelectedCountry'

import { ReactTelephoneInput } from '../src/ReactTelephoneInput'

let rti

const { allCountries } = countryData

Enzyme.configure({ adapter: new Adapter() })

expect.extend({
  toBeType(received, argument) {
    const initialType = typeof received
    const type =
      initialType === 'object' ? (Array.isArray(received) ? 'array' : initialType) : initialType
    return type === argument
      ? {
          message: () => `expected ${received} to be type ${argument}`,
          pass: true
        }
      : {
          message: () => `expected ${received} to be type ${argument}`,
          pass: false
        }
  }
})

describe('react telephone input', () => {
  afterEach(() => {
    if (rti) {
      ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(rti).parentNode)
      rti = null
    }
  })

  it('mandatory existential crisis test', () => {
    rti = TestUtils.renderIntoDocument(React.createElement(ReactTelephoneInput, {}))
    expect(rti).toBeDefined()
  })

  it('should render the top divs and inputses', () => {
    const wrapper = shallow(<ReactTelephoneInput />)

    expect(wrapper.find('div.react-tel-input')).toHaveLength(1)
    expect(wrapper.find('input')).toHaveLength(1)
  })

  it('should show the placeholder as passed in the prop', () => {
    const placeholder = '0001-121-212'
    const component = mount(<ReactTelephoneInput placeholder={placeholder} />)
    const input = component.find('input')
    expect(input.prop('placeholder')).toEqual(placeholder)
  })

  it('should call onEnterKeyPress prop callback on enter key press', () => {
    let onEnterKeyPress = jest.fn()
    const wrapper = mount(
      <ReactTelephoneInput
        defaultCountry="us"
        initialValue="+9112121"
        preferredCountries={['us', 'ca', 'zz', 'hk']}
        onEnterKeyPress={() => {
          onEnterKeyPress()
        }}
      />
    )

    expect(toJson(wrapper)).toMatchSnapshot()
    wrapper
      .find('input')
      .at(0)
      .simulate('focus')
    wrapper
      .find('input')
      .at(0)
      .simulate('change', { target: { value: '+91 12121-1212', checked: false } })
    wrapper
      .find('input')
      .at(0)
      .simulate('keyDown', { keyCode: 13, which: 13 })
    expect(onEnterKeyPress.mock.calls.length).toBe(1)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  // refer issue - https://github.com/mukeshsoni/react-telephone-input/issues/103
  it('should guess correct country when flag is changed manually from the dropdown', () => {
    const wrapper = mount(
      <ReactTelephoneInput defaultCountry="us" preferredCountries={['us', 'ca', 'zz', 'hk']} />
    )
    expect(wrapper.find('div.flag-dropdown')).toHaveLength(1)
    expect(wrapper.find('.selected-flag > div.us')).toHaveLength(1)

    // the dropdown list is not there
    expect(wrapper.find('.country-list')).toHaveLength(0)
    // let's click on the selected flag
    wrapper.find('.selected-flag').simulate('click')
    expect(wrapper.find('div.country-list')).toHaveLength(1)

    // now let's click on canada
    wrapper
      .find('div.country-list > div > div')
      .at(1)
      .simulate('click')
    expect(wrapper.find('div.country-list')).toHaveLength(0)
    expect(wrapper.find('.selected-flag div.ca')).toHaveLength(1)
  })

  it('should allow custom value for autoComplete input property', () => {
    const wrapper = shallow(<ReactTelephoneInput />)
    expect(wrapper.find('input').prop('autoComplete')).toEqual('tel')

    const wrapper2 = shallow(<ReactTelephoneInput autoComplete="off" />)
    expect(wrapper2.find('input').prop('autoComplete')).toEqual('off')
  })

  it('should guess selected country', () => {
    
    const props = {
      onlyCountries: allCountries,
      defaultCountry: allCountries[0].iso2,
    }
    
    rti = TestUtils.renderIntoDocument(React.createElement(ReactTelephoneInput, {}))
    // if nothing is sent in, select the first country in allCountries list as the default
    expect(guessSelectedCountry('', props).iso2).toEqual(allCountries[0].iso2)

    // if input value is sent, select appropriately
    expect(guessSelectedCountry('12', props).iso2).toEqual('us') // based on priority
    expect(guessSelectedCountry('12112121', props).iso2).toEqual('us')
    expect(guessSelectedCountry('913212121', props).iso2).toEqual('in')
    expect(guessSelectedCountry('237', props).iso2).toEqual('cm') // based on priority
    expect(guessSelectedCountry('599', props).iso2).toEqual('cw')
    expect(guessSelectedCountry('590', props).iso2).toEqual('gp')
    expect(guessSelectedCountry('1403', props).iso2).toEqual('ca')
    expect(guessSelectedCountry('18005', props).iso2).toEqual('us')
    expect(guessSelectedCountry('1809', props).iso2).toEqual('do')

    // select the first one if not able to resolve completely
    expect(guessSelectedCountry('59', props).iso2).toEqual(allCountries[0].iso2)
  })

  it('should set the correct highlightCountryIndex', () => {
    var afghanistan = {
      name: 'Afghanistan (‫افغانستان‬‎)',
      iso2: 'af',
      dialCode: '93',
      priority: 0
    }
    var albania = {
      name: 'Albania (Shqipëri)',
      iso2: 'al',
      dialCode: '355',
      priority: 0
    }
    var algeria = {
      name: 'Algeria (‫الجزائر‬‎)',
      iso2: 'dz',
      dialCode: '213',
      priority: 0
    }

    // Setup ReactTelephoneInput with a fixed set of countries
    // so we know the expected indexes for sure
    rti = TestUtils.renderIntoDocument(
      React.createElement(ReactTelephoneInput, {
        onlyCountries: [afghanistan, albania, algeria],
        preferredCountries: [algeria.iso2],
        initialValue: '+121345'
      })
    )

    let fakeEvent = {
      preventDefault: () => {}
    }

    // Emulate clicking a country and opening the dropdown,
    // then check if the highlightCountryIndex is correct
    rti.handleFlagItemClick(algeria)
    rti.handleFlagDropdownClick(fakeEvent)
    expect(rti.state.highlightCountryIndex).toEqual(0)
    expect(rti.state.formattedNumber).toEqual('+213121345')

    rti.handleFlagItemClick(afghanistan)
    rti.handleFlagDropdownClick(fakeEvent)
    expect(rti.state.highlightCountryIndex).toEqual(1)
    expect(rti.state.formattedNumber).toEqual('+93121345')

    rti.handleFlagItemClick(albania)
    rti.handleFlagDropdownClick(fakeEvent)
    expect(rti.state.highlightCountryIndex).toEqual(2)
    expect(rti.state.formattedNumber).toEqual('+355121345')
  })

  it('should trigger onFocus event handler when input element is focused', done => {
    const onFocus = (number, country) => {
      expect(number).toBeType('string')
      expect(country).toBeType('object')
      done()
    }

    rti = TestUtils.renderIntoDocument(React.createElement(ReactTelephoneInput, { onFocus }))
    expect(rti).toBeDefined()

    TestUtils.Simulate.focus(rti.numberInputRef)
  })

  it('should trigger onBlur event handler when input element is unfocused', done => {
    const onBlur = (number, country) => {
      expect(number).toBeType('string')
      expect(country).toBeType('object')
      done()
    }

    rti = TestUtils.renderIntoDocument(React.createElement(ReactTelephoneInput, { onBlur }))
    expect(rti).toBeDefined()

    TestUtils.Simulate.blur(rti.numberInputRef)
  })

  it('should re-render with correct phone number once value prop changed', () => {
    const wrapper = shallow(<ReactTelephoneInput value="+12313123132" />)
    expect(wrapper.state('formattedNumber')).toEqual('+1 (231) 312-3132')
    wrapper.setProps({ value: '+12313123133' })
    expect(wrapper.state('formattedNumber')).toEqual('+1 (231) 312-3133')
  })

  it('should re-render as empty once value prop becomes null', () => {
    const wrapper = shallow(<ReactTelephoneInput defaultCountry="us" value="+12313123132" />)
    expect(wrapper.state('formattedNumber')).toEqual('+1 (231) 312-3132')
    wrapper.setProps({ value: null })
    expect(wrapper.state('formattedNumber')).toEqual('+')
  })
})
