var React = require('react');
var ReactTelephoneInput = require('react-telephone-input');

var App = React.createClass({
    render () {
        return (
            <div>
                <ReactTelephoneInput defaultCountry='in' />
            </div>
        );
    }
});

React.render(<App />, document.getElementById('app'));
