'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactTelephoneInput = require('react-telephone-input');

var App = React.createClass({
    render() {
        return (
            <div>
                <ReactTelephoneInput defaultCountry='us' />
            </div>
        );
    }
});

ReactDOM.render(<App />, document.getElementById('app'));
