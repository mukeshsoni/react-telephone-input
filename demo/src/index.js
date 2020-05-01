import React from 'react';
import { render } from 'react-dom';
// import testGenerator from 'generate-ui-tests'

// import ReactTelephoneInput from '../../src/withStyles'
import RTI from '../../src/withStyles';

const flagsImagePath = require('../../images/flags.png');
// const RTI = testGenerator(ReactTelephoneInput)

// eslint-disable-next-line
function CodeBlock({ children }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <pre>
        <code>{children}</code>
      </pre>
    </div>
  );
}

const Demo = () => (
  <div>
    <h4>
      Github repo -{' '}
      <a href="https://github.com/mukeshsoni/react-telephone-input">
        https://github.com/mukeshsoni/react-telephone-input
      </a>
    </h4>
    <h1>React Telephone Input Demo</h1>
    <h3>Base case</h3>
    <CodeBlock>{'<RTI flagsImagePath={flagsImagePath} />'}</CodeBlock>
    <RTI flagsImagePath={flagsImagePath} />
    <br />
    <h3>With initial values and auto focus</h3>
    <CodeBlock>
      {`<RTI
  preferredCountries={['af', 'al']}
  defaultCountry="in"
  flagsImagePath={flagsImagePath}
  initialValue="+9112121"
  inputProps={{ autoFocus: true }}
/>`}
    </CodeBlock>
    <RTI
      preferredCountries={['af', 'al']}
      defaultCountry="in"
      flagsImagePath={flagsImagePath}
      initialValue="+9112121"
      inputProps={{ autoFocus: true }}
    />
    <br />
    <CodeBlock>
      {`<RTI
  defaultCountry="us"
  preferredCountries={['us', 'ca', 'zz', 'hk']}
  flagsImagePath={flagsImagePath}
/>`}
    </CodeBlock>
    <RTI
      defaultCountry="us"
      preferredCountries={['us', 'ca', 'zz', 'hk']}
      flagsImagePath={flagsImagePath}
    />
    <br />
    <h3>Different country - Albania</h3>
    <CodeBlock>
      {`<RTI
  flagsImagePath={flagsImagePath}
  preferredCountries={['af', 'al']}
  defaultCountry="in"
  initialValue="+9112121"
/>`}
    </CodeBlock>
    <RTI
      flagsImagePath={flagsImagePath}
      preferredCountries={['af', 'al']}
      defaultCountry="in"
      initialValue="+9112121"
    />
    <br />
    <h3>With preferred countries</h3>
    <CodeBlock>
      {`<RTI
  defaultCountry="us"
  flagsImagePath={flagsImagePath}
  initialValue="+13559112121"
  preferredCountries={['us', 'ca', 'zz', 'hk']}
/>`}
    </CodeBlock>
    <RTI
      defaultCountry="us"
      flagsImagePath={flagsImagePath}
      initialValue="+13559112121"
      preferredCountries={['us', 'ca', 'zz', 'hk']}
    />
  </div>
);

render(<Demo />, document.querySelector('#demo'));
