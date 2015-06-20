'use strict';
/* global describe, it, beforeEach */

var expect = require('chai').expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;
var ReactTelephoneInput = require('../src/index.js');

describe('react telephone input', function() {
    it('mandatory existential crisis test', function() {
        var rti = TestUtils.renderIntoDocument(React.createElement(ReactTelephoneInput, {}));
        expect(rti).to.be.defined;
        expect(rti.refs.numberInput).to.be.defined;
        expect(true).to.be.true;
    });
});
