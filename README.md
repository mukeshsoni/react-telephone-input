Reactjs Component for International Telephone Input
===================================================

*IMP*: From 3.*, the styles won't be included by default. Can use `require('react-telephone-input/lib/withStyles')` to get the styles.

Inspired from the awesome jquery plugin for <a href="https://github.com/Bluefieldscom/intl-tel-input" target="_blank">International Telephone Input</a>.

This one is written as a [reactjs](http://facebook.github.io/react/) component.

Live Demo here - [http://unstack.in/react-telephone-input/](http://unstack.in/react-telephone-input/)

![How it looks](/images/react-telephone-number-screenshot.png?raw=true "How it looks")

```js
function handleInputChange(telNumber) {
    console.log('input number changed to: ', telNumber);
}

// Use declaratively within another react components render method
var ReactTelInput = require('react-telephone-input');
// var ReactTelInput = require('react-telephone-input/lib/withStyles'), if you need the styles

<MyAwesomeReactComponent>
  <ReactTelInput
        defaultCountry="in"
        flagsImagePath='/path/to/images/flags.png'
        onChange={handleInputChange}/>
</MyAwesomeReactComponent>

// or render standalone
var ReactTelInput = require('react-telephone-input');
React.render(<ReactTelInput
                defaultCountry="in"
                flagsImagePath='/path/to/images/flags.png'
                onChange={handleInputChange}/>,
                document.getElementById('my-container'));
```

## How to use it
- If you install it from `npm install`, you can just do `var ReactTelephoneInput = require('react-telephone-input');`
- You will need to copy flags.png from example/src folder to see the flag icons for each country.
- Set the path to the flags image using the prop `flagsImagePath`
```js
function handleInputChange(telNumber) {
	console.log('input number changed to: ', telNumber);
}

<ReactTelephoneInput
        defaultCountry='in'
        flagsImagePath='/path/to/images/flags.png'
        onChange={handleInputChange}>
```
The default value for `flagsImagePath` is 'flags.png'


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

go to your browser and type `http://localhost:8000`
```
