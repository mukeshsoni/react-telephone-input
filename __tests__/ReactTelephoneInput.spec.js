import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import countryData from 'country-telephone-data';

import { ReactTelephoneInput } from '../src/ReactTelephoneInput';
import guessSelectedCountry from '../src/guessSelectedCountry';

const { allCountries } = countryData;

expect.extend({
  toBeType(received, argument) {
    const initialType = typeof received;
    const type =
      initialType === 'object'
        ? Array.isArray(received)
          ? 'array'
          : initialType
        : initialType;
    return type === argument
      ? {
          message: () => `expected ${received} to be type ${argument}`,
          pass: true,
        }
      : {
          message: () => `expected ${received} to be type ${argument}`,
          pass: false,
        };
  },
});

describe('react telephone input', () => {
  it('mandatory existential crisis test', () => {
    const { container } = render(<ReactTelephoneInput />);
    expect(container).toBeDefined();
  });

  it('should render the top divs and inputses', () => {
    const { container } = render(<ReactTelephoneInput />);

    expect(container.querySelectorAll('div.react-tel-input')).toHaveLength(1);
    expect(container.querySelectorAll('input')).toHaveLength(1);
  });

  it('should show the placeholder as passed in the prop', () => {
    const placeholder = '0001-121-212';
    const { queryByPlaceholderText } = render(
      <ReactTelephoneInput placeholder={placeholder} />,
    );

    expect(queryByPlaceholderText(placeholder)).toBeDefined();
  });

  it('should call onEnterKeyPress prop callback on enter key press', () => {
    const onEnterKeyPress = jest.fn();
    const { container } = render(
      <ReactTelephoneInput
        defaultCountry="us"
        initialValue="+9112121"
        preferredCountries={['us', 'ca', 'zz', 'hk']}
        onEnterKeyPress={() => {
          onEnterKeyPress();
        }}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
    const input = container.querySelector('input');
    input.focus();
    container.querySelector('input').focus();
    fireEvent.change(input, {
      target: { value: '+91 12121-1212', checked: false },
    });
    fireEvent.keyDown(input, {
      key: 'Enter',
      code: 'Enter',
      which: 13,
      keyCode: 13,
    });
    expect(onEnterKeyPress.mock.calls.length).toBe(1);
    expect(container.firstChild).toMatchSnapshot();
  });

  // refer issue - https://github.com/mukeshsoni/react-telephone-input/issues/103
  it('should guess correct country when flag is changed manually from the dropdown', () => {
    const { container } = render(
      <ReactTelephoneInput
        defaultCountry="us"
        preferredCountries={['us', 'ca', 'zz', 'hk']}
      />,
    );

    expect(container.querySelectorAll('div.flag-dropdown')).toHaveLength(1);
    expect(container.querySelectorAll('.selected-flag > div.us')).toHaveLength(
      1,
    );

    // the dropdown list is not there
    expect(container.querySelector('.country-list')).toBeNull();
    // let's click on the selected flag
    fireEvent.click(container.querySelector('.selected-flag'));
    expect(container.querySelector('div.country-list')).not.toBeNull();

    const countryList = container.querySelectorAll(
      'div.country-list > div > div',
    );
    // the preferred list should put canada in the second position in country
    // dropdown
    // now let's click on canada
    fireEvent.click(countryList[1]);
    expect(container.querySelectorAll('div.country-list')).toHaveLength(0);
    expect(container.querySelectorAll('.selected-flag div.ca')).toHaveLength(1);
  });

  it('should allow custom value for autoComplete input property', () => {
    const { rerender, container } = render(<ReactTelephoneInput />);
    expect(
      container.querySelector('input').getAttribute('autocomplete'),
    ).toEqual('tel');

    rerender(<ReactTelephoneInput autoComplete="off" />);
    expect(
      container.querySelector('input').getAttribute('autocomplete'),
    ).toEqual('off');
  });

  it('should guess selected country', () => {
    const props = {
      onlyCountries: allCountries,
      defaultCountry: allCountries[0].iso2,
    };

    // if nothing is sent in, select the first country in allCountries list as the default
    expect(guessSelectedCountry('', props).iso2).toEqual(allCountries[0].iso2);

    // if input value is sent, select appropriately
    expect(guessSelectedCountry('12', props).iso2).toEqual('us'); // based on priority
    expect(guessSelectedCountry('12112121', props).iso2).toEqual('us');
    expect(guessSelectedCountry('913212121', props).iso2).toEqual('in');
    expect(guessSelectedCountry('237', props).iso2).toEqual('cm'); // based on priority
    expect(guessSelectedCountry('599', props).iso2).toEqual('cw');
    expect(guessSelectedCountry('590', props).iso2).toEqual('gp');
    expect(guessSelectedCountry('1403', props).iso2).toEqual('ca');
    expect(guessSelectedCountry('18005', props).iso2).toEqual('us');
    expect(guessSelectedCountry('1809', props).iso2).toEqual('do');

    // select the first one if not able to resolve completely
    expect(guessSelectedCountry('59', props).iso2).toEqual(
      allCountries[0].iso2,
    );
  });

  it('should set the correct highlightCountryIndex', () => {
    const afghanistan = {
      name: 'Afghanistan (‫افغانستان‬‎)',
      iso2: 'af',
      dialCode: '93',
      priority: 0,
    };
    const albania = {
      name: 'Albania (Shqipëri)',
      iso2: 'al',
      dialCode: '355',
      priority: 0,
    };
    const algeria = {
      name: 'Algeria (‫الجزائر‬‎)',
      iso2: 'dz',
      dialCode: '213',
      priority: 0,
      format: '+...-..-...-....',
    };

    // Setup ReactTelephoneInput with a fixed set of countries
    // so we know the expected indexes for sure
    const { container } = render(
      <ReactTelephoneInput
        onlyCountries={[afghanistan, albania, algeria]}
        preferredCountries={[algeria.iso2]}
        initialValue="+121345"
      />,
    );

    fireEvent.click(container.querySelector('.selected-flag'));

    let countryList = container.querySelectorAll(
      'div.country-list > div > div',
    );
    fireEvent.click(countryList[0]);
    let input = container.querySelector('input');
    expect(input.value).toEqual('+213-12-134-5');

    fireEvent.click(container.querySelector('.selected-flag'));
    countryList = container.querySelectorAll('div.country-list > div > div');
    fireEvent.click(countryList[1]);
    input = container.querySelector('input');
    expect(input.value).toEqual('+93121345');

    fireEvent.click(container.querySelector('.selected-flag'));
    countryList = container.querySelectorAll('div.country-list > div > div');
    fireEvent.click(countryList[2]);
    input = container.querySelector('input');
    expect(input.value).toEqual('+355121345');
  });

  it('should trigger onFocus event handler when input element is focused', (done) => {
    const onFocus = (number, country) => {
      expect(number).toBeType('string');
      expect(country).toBeType('object');
      done();
    };

    const { container } = render(<ReactTelephoneInput onFocus={onFocus} />);

    fireEvent.focus(container.querySelector('input'));
  });

  it('should trigger onBlur event handler when input element is unfocused', (done) => {
    const onBlur = (number, country) => {
      expect(number).toBeType('string');
      expect(country).toBeType('object');
      done();
    };

    const { container } = render(<ReactTelephoneInput onBlur={onBlur} />);

    fireEvent.blur(container.querySelector('input'));
  });

  it('should re-render with correct phone number once value prop changed', () => {
    const { container, rerender } = render(
      <ReactTelephoneInput value="+12313123132" />,
    );
    let input = container.querySelector('input');
    expect(input.value).toEqual('+1 (231) 312-3132');
    rerender(<ReactTelephoneInput value="+12313123133" />);
    input = container.querySelector('input');
    expect(input.value).toEqual('+1 (231) 312-3133');
  });
});
