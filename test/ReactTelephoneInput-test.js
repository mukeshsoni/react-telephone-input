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
var ReactTelephoneInput = require('../src/ReactTelephoneInput.js');
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
        expect(rti.guessSelectedCountry('12').iso2).to.equal('us'); // based on priority
        expect(rti.guessSelectedCountry('12112121').iso2).to.equal('us');
        expect(rti.guessSelectedCountry('913212121').iso2).to.equal('in');
        expect(rti.guessSelectedCountry('237').iso2).to.equal('cm'); // based on priority
        expect(rti.guessSelectedCountry('599').iso2).to.equal('cw');
        expect(rti.guessSelectedCountry('590').iso2).to.equal('gp');

        // select the first one if not able to resolve completely
        expect(rti.guessSelectedCountry('59').iso2).to.equal(allCountries[0].iso2);
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
