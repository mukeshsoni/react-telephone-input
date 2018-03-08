/* global describe, it, afterEach*/
/* eslint: no-unused-expressions: false*/
'use strict'

var chai = require('chai')
var dirtyChai = require('dirty-chai')
var expect = chai.expect
chai.use(dirtyChai)

import 'raf/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
var find = require('lodash/find')
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import TestUtils from 'react-dom/test-utils'
import {
    ReactTelephoneInput,
    formatNumber,
    replaceCountryCode
} from '../src/ReactTelephoneInput.js'
import countryData from 'country-telephone-data'

Enzyme.configure({ adapter: new Adapter() });

var allCountries = countryData.allCountries
var rti

describe('react telephone input', function() {
    afterEach(function() {
        if (rti) {
            ReactDOM.unmountComponentAtNode(
                ReactDOM.findDOMNode(rti).parentNode
            )
            rti = null
        }
    })

    it('mandatory existential crisis test', () => {
        rti = TestUtils.renderIntoDocument(
            React.createElement(ReactTelephoneInput, {})
        )
        expect(rti).to.be.defined
        expect(rti.refs.numberInput).to.be.defined
    })

    it('should render the top divs and inputses', () => {
        const wrapper = shallow(<ReactTelephoneInput />)

        expect(wrapper.find('div.react-tel-input')).to.have.length(1)
        expect(wrapper.find('input')).to.have.length(1)
    })

    it('should show the placeholder as passed in the prop', () => {
        const placeholder = '0001-121-212'
        const component = mount(
            <ReactTelephoneInput placeholder={placeholder} />
        )
        const input = component.find('input')
        expect(input.prop('placeholder')).to.eql(placeholder)
    })

    // refer issue - https://github.com/mukeshsoni/react-telephone-input/issues/103
    it('should guess correct country when flag is changed manually from the dropdown', () => {
        const wrapper = mount(
            <ReactTelephoneInput
                defaultCountry="us"
                preferredCountries={['us', 'ca', 'zz', 'hk']}
            />
        )
        expect(wrapper.find('div.flag-dropdown')).to.have.length(1)
        expect(wrapper.find('div.selected-flag > div.us')).to.have.length(1)

        // the dropdown list is not there
        expect(wrapper.find('ul.country-list')).to.have.length(0)
        // let's click on the selected flag
        wrapper.find('div.selected-flag').simulate('click')
        expect(wrapper.find('ul.country-list')).to.have.length(1)

        // now let's click on canada
        wrapper.find('ul.country-list > li').at(1).simulate('click')
        expect(wrapper.find('ul.country-list')).to.have.length(0)
        expect(wrapper.find('div.selected-flag > div.ca')).to.have.length(1)
    })

    it('should allow custom value for autoComplete input property', () => {
        const wrapper = shallow(<ReactTelephoneInput />)
        expect(wrapper.find('input').prop('autoComplete')).to.equal('tel')

        const wrapper2 = shallow(<ReactTelephoneInput autoComplete="off" />)
        expect(wrapper2.find('input').prop('autoComplete')).to.equal('off')
    })

    it('should guess selected country', () => {
        rti = TestUtils.renderIntoDocument(
            React.createElement(ReactTelephoneInput, {})
        )
        // if nothing is sent in, select the first country in allCountries list as the default
        expect(rti.guessSelectedCountry('').iso2).to.equal(allCountries[0].iso2)

        // if input value is sent, select appropriately
        expect(rti.guessSelectedCountry('12').iso2).to.equal('us') // based on priority
        expect(rti.guessSelectedCountry('12112121').iso2).to.equal('us')
        expect(rti.guessSelectedCountry('913212121').iso2).to.equal('in')
        expect(rti.guessSelectedCountry('237').iso2).to.equal('cm') // based on priority
        expect(rti.guessSelectedCountry('599').iso2).to.equal('cw')
        expect(rti.guessSelectedCountry('590').iso2).to.equal('gp')
        expect(rti.guessSelectedCountry('1403').iso2).to.equal('ca')
        expect(rti.guessSelectedCountry('18005').iso2).to.equal('us')
        expect(rti.guessSelectedCountry('1809').iso2).to.equal('do')

        // select the first one if not able to resolve completely
        expect(rti.guessSelectedCountry('59').iso2).to.equal(
            allCountries[0].iso2
        )
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

        // Emulate clicking a countryk and opening the dropdown,
        // then check if the highlightCountryIndex is correct
        rti.handleFlagItemClick(algeria)
        rti.handleFlagDropdownClick(fakeEvent)
        expect(rti.state.highlightCountryIndex).to.equal(0)
        expect(rti.state.formattedNumber).to.equal('+213121345')

        rti.handleFlagItemClick(afghanistan)
        rti.handleFlagDropdownClick(fakeEvent)
        expect(rti.state.highlightCountryIndex).to.equal(1)
        expect(rti.state.formattedNumber).to.equal('+93121345')

        rti.handleFlagItemClick(albania)
        rti.handleFlagDropdownClick(fakeEvent)
        expect(rti.state.highlightCountryIndex).to.equal(2)
        expect(rti.state.formattedNumber).to.equal('+355121345')
    })

    it('should trigger onFocus event handler when input element is focused', done => {
        const onFocus = (number, country) => {
            expect(number).to.be.a.string
            expect(country).to.be.string
            done()
        }

        rti = TestUtils.renderIntoDocument(
            React.createElement(ReactTelephoneInput, { onFocus })
        )
        expect(rti).to.be.defined

        TestUtils.Simulate.focus(rti.numberInputRef)
    })

    it('should trigger onBlur event handler when input element is unfocused', done => {
        const onBlur = (number, country) => {
            expect(number).to.be.a.string
            expect(country).to.be.string
            done()
        }

        rti = TestUtils.renderIntoDocument(
            React.createElement(ReactTelephoneInput, { onBlur })
        )
        expect(rti).to.be.defined

        TestUtils.Simulate.blur(rti.numberInputRef)
    })

    it('should re-render with correct phone number once value prop changed', () => {
        const wrapper = shallow(<ReactTelephoneInput value="+12313123132" />)
        expect(wrapper.state('formattedNumber')).to.equal('+1 (231) 312-3132')
        wrapper.setProps({ value: '+12313123133' })
        expect(wrapper.state('formattedNumber')).to.equal('+1 (231) 312-3133')
    })

    it('should re-render as empty once value prop becomes null', () => {
        const wrapper = shallow(
            <ReactTelephoneInput defaultCountry="us" value="+12313123132" />
        )
        expect(wrapper.state('formattedNumber')).to.equal('+1 (231) 312-3132')
        wrapper.setProps({ value: null })
        expect(wrapper.state('formattedNumber')).to.equal('')
    })

    describe('country code replacement', () => {
        it('simple replacements', () => {
            let oldNumber = '+91'
            let currentSelectedCountry = find(allCountries, { iso2: 'in' })
            let nextSelectedCountry = find(allCountries, { iso2: 'iq' })
            let expectedNumber = '964'

            let newNumber = replaceCountryCode(
                currentSelectedCountry,
                nextSelectedCountry,
                oldNumber.replace(/\D/g, '')
            )
            expect(newNumber).to.equal(expectedNumber)
        })

        it('should take care of formatting nuances when replacing country codes', () => {
            // e.g. US virgin islands number formats to something like this '+1(340)'
            // the problem would be solved if we just take the numbers and replace country code and then reformat the number
            let oldNumber = '+1(340)'
            let currentSelectedCountry = find(allCountries, { iso2: 'vi' })
            let nextSelectedCountry = find(allCountries, { iso2: 'iq' })
            let expectedNumber = '964'

            let newNumber = replaceCountryCode(
                currentSelectedCountry,
                nextSelectedCountry,
                oldNumber.replace(/\D/g, '')
            )
            expect(newNumber).to.equal(expectedNumber)
        })
    })

    describe('format number', () => {
        it('should format number with just dial code', () => {
            let country = find(allCountries, { iso2: 'in' })
            let number = '91'
            let expectedFormattedNumber = '+91'

            expect(formatNumber(number, country.format, true)).to.equal(
                expectedFormattedNumber
            )
        })

        it('simple format - should format number with dial code and some other numeric text', () => {
            let country = find(allCountries, { iso2: 'in' })
            let number = '9187124'
            let expectedFormattedNumber = '+91 87124'

            expect(formatNumber(number, country.format, true)).to.equal(
                expectedFormattedNumber
            )
        })

        it('complex format - should format number with dashes in them', () => {
            let country = find(allCountries, { iso2: 'us' })
            let number = '187124'
            let expectedFormattedNumber = '+1 (871) 24'
            let formattedNumber = formatNumber(number, country.format, true)

            expect(formattedNumber).to.equal(expectedFormattedNumber)
        })

        // the number if formatted without closing bracket because otherwise user can never delete characters using backspace
        // when the cursor is at a backspace
        it('should format number correctly at the boundary of brackets', () => {
            let country = find(allCountries, { iso2: 'us' })
            let number = '1871'
            let expectedFormattedNumber = '+1 (871'
            let formattedNumber = formatNumber(number, country.format, true)

            expect(formattedNumber).to.equal(expectedFormattedNumber)
        })
    })
})
