node-lessify 
============
Version 0.0.6

[![Build Status](https://travis-ci.org/wilson428/node-lessify.png)](https://travis-ci.org/wilson428/node-lessify)

LESS 2.0 precompiler and CSS plugin for Browserify v2. Inspired by [node-underscorify](https://github.com/maxparm/node-underscorify).

When bundling an app using [Browserify](http://browserify.org/), it's often convenient to be able to include your CSS as a script that appends the style declarations to the head. This is particularly relevant for self-assembling apps that attach themselves to a page but otherwise have reserved real-estate on the DOM.

This small script allows you to `require()` your CSS or LESS files as you would any other script.

## Installation

```
npm install node-lessify
```

## Usage
Write your LESS or CSS files as you normally would, and put them somewhere where your script can find it.

Then simply require them as you might anything else:

```
require('./styles.less');
require('./mysite.css');
```

To compile the stylesheets, pass this module to browserify as a transformation on the command line.

```
browserify -t node-lessify script.js > bundle.js
```

## How it works

The stylesheets are compiled (in the case of LESS), minified, and bundle into a function that creates a new `<style>` element and appends it to the `<head>` using [native Javascript](http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript).

## Imports
LESS allows one to ```@import``` other LESS files. This module synchronously imports those dependencies at the time of the bundling. It looks for the imported files in both the directory of the parent file and the folder where the module itself lives, so it should work so long as the paths in the ```@import``` commands are correct relative to the importing file, as usual. It is not currently tested for recursive importing.

## Text Mode
[As requested](https://github.com/wilson428/node-lessify/issues/1), it is now possible to ask the transformation not to auto-append the css but merely to compile it into a string and assign it to a variable. This is accomplished by adding a `package.json` file in the directory from which browserify is run with the following properties:

    "browserify": {
        "transform": ["node-lessify"],
        "transform-options": {
        	"node-lessify": "textMode"
        }
    }

See the dummy app in the [test directory](/test) for an example of this in action.