var React = require('react');
var ReactTelephoneInput = require('react-telephone-input');

var App = React.createClass({
    render () {
        return (
            <div>
                <ReactTelephoneInput />
            </div>
        );
    }
});

React.render(<App />, document.getElementById('app'));
