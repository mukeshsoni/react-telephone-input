'use strict';
/* global describe, it, beforeEach */

var jsdom = require('mocha-jsdom');
var expect = require('chai').expect;
var React = require('react/addons');
var TestUtils = React.addons.TestUtils;

describe('react telephone input', function() {
    jsdom();

    it('should run example test', function() {
        expect(true).to.be.true;
    });
});