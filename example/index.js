var React = require('react');
var ReactTelInput = require('../');

// React.render(<ReactTelInput />, document.getElementById('plain'));

React.render(<ReactTelInput value='+91 9999999999' preferredCountries={['gb', 'in']} />, document.getElementById('preferred-countries'));
