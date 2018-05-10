import React, { Component } from 'react'
import { render } from 'react-dom'
import testGenerator from 'generate-ui-tests'

import RTI from '../../src/withStyles'

const Demo = () => {
  return (
    <div>
      <h1>
        Github repo -{' '}
        <a href="https://github.com/mukeshsoni/react-telephone-input">
          https://github.com/mukeshsoni/react-telephone-input
        </a>
      </h1>
      <h1>React Telephone Input Demo</h1>
      <h4>Base case</h4>
      <RTI
        preferredCountries={['af', 'al']}
        defaultCountry="in"
        flagsImagePath={require('../../images/flags.png')}
        initialValue="+9112121"
        inputProps={{ autoFocus: true }}
      />
      <h4>With initial value</h4>
      <RTI
        defaultCountry="in"
        flagsImagePath={require('../../images/flags.png')}
        initialValue="+9112121"
      />
      <h4>With initial value and autoFocus on input</h4>
      <RTI
        defaultCountry="in"
        flagsImagePath={require('../../images/flags.png')}
        initialValue="+9112121"
        inputProps={{ autoFocus: true }}
      />
      <h4>Different country - Albania</h4>
      <RTI
        defaultCountry="al"
        flagsImagePath={require('../../images/flags.png')}
        initialValue="3559112121"
      />
      <h4>With preferred countries</h4>
      <RTI
        defaultCountry="us"
        flagsImagePath={require('../../images/flags.png')}
        initialValue="+13559112121"
        preferredCountries={['us', 'ca', 'zz', 'hk']}
      />
    </div>
  )
}

let NewDemo = testGenerator(Demo)
render(<NewDemo />, document.querySelector('#demo'))
