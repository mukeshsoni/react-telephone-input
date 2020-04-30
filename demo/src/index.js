import React from 'react';
import { render } from 'react-dom';
// import testGenerator from 'generate-ui-tests'

// import ReactTelephoneInput from '../../src/withStyles'
import RTI from '../../src/withStyles';

const flagsImagePath = require('../../images/flags.png');
// const RTI = testGenerator(ReactTelephoneInput)

const propsDemo3 = {
  preferredCountries: ['af', 'al'],
  defaultCountry: 'in',
  flagsImagePath: '/flags.723494a4.png',
  initialValue: '+9112121',
  inputProps: {
    autoFocus: true,
  },
};

const Demo = () => (
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
      flagsImagePath={flagsImagePath}
      initialValue="+9112121"
      inputProps={{ autoFocus: true }}
    />
    <RTI
      defaultCountry="us"
      preferredCountries={['us', 'ca', 'zz', 'hk']}
      flagsImagePath={flagsImagePath}
    />
    <RTI {...propsDemo3} />
    {/* <h4>With initial value</h4>
      <RTI
        defaultCountry="in"
        flagsImagePath={flagsImagePath}
        initialValue="+9112121"
      />
      <h4>With initial value and autoFocus on input</h4>
      <RTI
        defaultCountry="in"
        flagsImagePath={flagsImagePath}
        initialValue="+9112121"
        inputProps={{ autoFocus: true }}
      />
      <h4>Different country - Albania</h4>
      <RTI
        defaultCountry="al"
        flagsImagePath={flagsImagePath}
        initialValue="3559112121"
      />
      <h4>With preferred countries</h4>
      <RTI
        defaultCountry="us"
        flagsImagePath={flagsImagePath}
        initialValue="+13559112121"
        preferredCountries={['us', 'ca', 'zz', 'hk']}
      /> */}
  </div>
);

render(<Demo />, document.querySelector('#demo'));
