/* global describe, it*/
'use strict';

var expect = require('chai').expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var ReactTelephoneInput = require('../src/index.js');
var allCountries = require('../src/country_data.js').allCountries;

describe('react telephone input', function() {
    // beforeEach(function() {

    // });

    // afterEach(function() {

    // });

    it('mandatory existential crisis test', function() {
        var rti = TestUtils.renderIntoDocument(React.createElement(ReactTelephoneInput, {}));
        expect(rti).to.be.defined;
        expect(rti.refs.numberInput).to.be.defined;
        expect(true).to.be.true;
    });

    it('should guess selected country', function() {
        var rti = TestUtils.renderIntoDocument(React.createElement(ReactTelephoneInput, {}));
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
});
