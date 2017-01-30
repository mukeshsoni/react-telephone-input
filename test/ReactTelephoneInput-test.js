/* global describe, it, afterEach*/
/* eslint: no-unused-expressions: false*/
'use strict';

var chai = require('chai');
var dirtyChai = require('dirty-chai');
var expect = chai.expect;
chai.use(dirtyChai);

var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var {ReactTelephoneInput} = require('../src/ReactTelephoneInput.js');
var allCountries = require('../src/country_data.js').allCountries;
var rti;

describe('react telephone input', function() {
    afterEach(function() {
        if(rti) {
            ReactDOM.unmountComponentAtNode(ReactDOM.findDOMNode(rti).parentNode);
            rti = null;
        }
    });

    it('should render the top divs and inputses', () => {
        const renderer = TestUtils.createRenderer();
        renderer.render(<ReactTelephoneInput/>);
        const renderedTree = renderer.getRenderOutput();

        expect(renderedTree.type).to.equal('div');
        expect(renderedTree.props.className).to.equal('react-tel-input');
        expect(renderedTree.props.children[0].type).to.equal('input');
    });

    it('mandatory existential crisis test', () => {
        rti = TestUtils.renderIntoDocument(React.createElement(ReactTelephoneInput, {}));
        expect(rti).to.be.defined;
        expect(rti.refs.numberInput).to.be.defined;
        expect(true).to.be.true();
    });

    it('should guess selected country', () => {
        rti = TestUtils.renderIntoDocument(React.createElement(ReactTelephoneInput, {}));
        // if nothing is sent in, select the first country in allCountries list as the default
        expect(rti.guessSelectedCountry('').iso2).to.equal(allCountries[0].iso2);

        // if input value is sent, select appropriately
        expect(rti.guessSelectedCountry('1').iso2).to.equal(allCountries[0].iso2); // only guess after 2 or more digits entered
        expect(rti.guessSelectedCountry('12').iso2).to.equal('us'); // based on priority
        expect(rti.guessSelectedCountry('12112121').iso2).to.equal('us');
        expect(rti.guessSelectedCountry('913212121').iso2).to.equal('in');
        expect(rti.guessSelectedCountry('237').iso2).to.equal('cm'); // based on priority
        expect(rti.guessSelectedCountry('599').iso2).to.equal('cw');
        expect(rti.guessSelectedCountry('590').iso2).to.equal('gp');
        expect(rti.guessSelectedCountry('1403').iso2).to.equal('ca');
        expect(rti.guessSelectedCountry('18005').iso2).to.equal('us');
        expect(rti.guessSelectedCountry('1809').iso2).to.equal('do');


        // select the first one if not able to resolve completely
        expect(rti.guessSelectedCountry('59').iso2).to.equal(allCountries[0].iso2);
    });

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
        priority: 0,
      }
      var algeria = {
        name: 'Algeria (‫الجزائر‬‎)',
        iso2: 'dz',
        dialCode: '213',
        priority: 0
      }

      // Setup ReactTelephoneInput with a fixed set of countries
      // so we know the expected indexes for sure
      rti = TestUtils.renderIntoDocument(React.createElement(ReactTelephoneInput, {
        onlyCountries: [afghanistan, albania, algeria],
        preferredCountries: [algeria.iso2],
        initialValue: '+121345',
      }));


      // Emulate clicking a countryk and opening the dropdown,
      // then check if the highlightCountryIndex is correct
      rti.handleFlagItemClick(algeria)
      rti.handleFlagDropdownClick()
      expect(rti.state.highlightCountryIndex).to.equal(0)
      expect(rti.state.formattedNumber).to.equal('+213121345');

      rti.handleFlagItemClick(afghanistan)
      rti.handleFlagDropdownClick()
      expect(rti.state.highlightCountryIndex).to.equal(1)
      expect(rti.state.formattedNumber).to.equal('+93121345');

      rti.handleFlagItemClick(albania)
      rti.handleFlagDropdownClick()
      expect(rti.state.highlightCountryIndex).to.equal(2)
      expect(rti.state.formattedNumber).to.equal('+355121345');
    });

    it('should not switch selectedCountry back to USA after Canada is selected and number is 1', () => {
      var canada = {
        name: '‬‎Canada',
        iso2: 'ca',
        dialCode: '1',
        priority: 0
      };
      var unitedStates = {
        name: 'United States',
        iso2: 'us',
        dialCode: '1',
        priority: 0
      };

      // Setup ReactTelephoneInput with a fixed set of countries
      // so we know the expected indexes for sure
      rti = TestUtils.renderIntoDocument(React.createElement(ReactTelephoneInput, {
        onlyCountries: [canada, unitedStates],
        preferredCountries: [unitedStates.iso2],
        initialValue: '+1',
      }));


      // Emulate clicking a country and opening the dropdown,
      // then check if the state.selectedCountry.iso2 is correct
      rti.handleFlagItemClick(canada)
      rti.handleFlagDropdownClick()
      expect(rti.state.selectedCountry.iso2).to.equal('ca');
      expect(rti.state.formattedNumber).to.equal('+1');

      rti.handleFlagItemClick(unitedStates)
      rti.handleFlagDropdownClick()
      expect(rti.state.selectedCountry.iso2).to.equal('us');
      expect(rti.state.formattedNumber).to.equal('+1');
    });

    it('should trigger onFocus event handler when input element is focused', (done) => {
        const onFocus = (number, country) => {
            expect(number).to.be.a.string;
            expect(country).to.be.string;
            done();
        };

        rti = TestUtils.renderIntoDocument(React.createElement(ReactTelephoneInput, {onFocus}));
        expect(rti).to.be.defined;

        TestUtils.Simulate.focus(rti.refs.numberInput);
    });

    it('should trigger onBlur event handler when input element is unfocused', (done) => {
        const onBlur = (number, country) => {
            expect(number).to.be.a.string;
            expect(country).to.be.string;
            done();
        };

        rti = TestUtils.renderIntoDocument(React.createElement(ReactTelephoneInput, {onBlur}));
        expect(rti).to.be.defined;

        TestUtils.Simulate.blur(rti.refs.numberInput);
    });

    it('should re-render with correct phone number once value prop changed', () => {
        const div = document.createElement('div');
        //initial call will mount the component into node, further renders will update already existing
        const renderInput = (node, props) => ReactDOM.render(<ReactTelephoneInput {...props}/>, node);

        rti = renderInput(div, {value: '+12313123132'});
        expect(rti.state.formattedNumber).to.equal('+1 (231) 312-3132');

        renderInput(div, {value: '+12313123133'});
        expect(rti.state.formattedNumber).to.equal('+1 (231) 312-3133');
    });
});
