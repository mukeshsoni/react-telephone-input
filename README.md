Reactjs Component for International Telephone Input
===================================================

Inspired from the awesome jquery plugin for <a href="https://github.com/Bluefieldscom/intl-tel-input" target="_blank">International Telephone Input</a>.


This one is written as a [reactjs](http://facebook.github.io/react/) component.

![How it looks](/images/react-telephone-number-screenshot.png?raw=true "How it looks")

```
// Use declaratively within another react components render method
var ReactTelInput = require('react-telephone-input');
<MyAwesomeReactComponent>
  <ReactTelInput defaultCountry="in"/>
</MyAwesomeReactComponent>

// or render standalone
var ReactTelInput = require('react-telephone-input');
React.renderComponent(<FlagBearer defaultCountry="in"/>, document.getElementById('my-container'));
```

Note - You will need to change the location of flags.png in the style.less file.

## Features
* Automatically format the number as the user types
* Navigate the country dropdown by typing a country's name, or using up/down keys
* Selecting a country from the dropdown will update the dial code in the input
* Typing a different dial code will automatically update the displayed flag
* Country names in the dropdown also include localised versions in brackets
* Dropdown appears above or below the input depending on available space/scroll position

You can try the app by downloading everything and running the commands given below -

```
$ npm install
$ npm start

go to your browser and type http://127.0.0.1:1337/example/index.html
```