import React from 'react';
import { render, fireEvent } from '@testing-library/react';

// eslint-disable-next-line
import ReactTelephoneInput from '../../src/ReactTelephoneInput';

test('Interaction test 1', () => {
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

  fireEvent.focus(input);
  fireEvent.keyDown(input, { keyCode: 49, which: 49 });
  fireEvent.change(input, { target: { value: '+91 121211', checked: false } });
  fireEvent.keyDown(input, { keyCode: 50, which: 50 });
  fireEvent.change(input, {
    target: { value: '+91 12121-12', checked: false },
  });
  fireEvent.keyDown(input, { keyCode: 13, which: 13 });
  fireEvent.blur(input);
  expect(onEnterKeyPress.mock.calls.length).toEqual(1);
  expect(container.firstChild).toMatchSnapshot();
});

test('Interaction test 2', () => {
  const onChange = jest.fn();

  const props = {
    preferredCountries: ['af', 'al'],
    defaultCountry: 'in',
    flagsImagePath: '/flags.723494a4.png',
    initialValue: '+9112121',
    inputProps: {
      autoFocus: true,
    },
    onChange: (formattedNumber) => onChange(formattedNumber),
  };

  const { container } = render(<ReactTelephoneInput {...props} />);

  expect(container.firstChild).toMatchSnapshot();

  const input = container.querySelector('input');

  fireEvent.focus(input);
  fireEvent.click(input);
  fireEvent.keyDown(input, { keyCode: 49, which: 49 });
  fireEvent.change(input, { target: { value: '+91 121211', checked: false } });
  expect(onChange).toBeCalledWith('+91 12121-1');

  fireEvent.keyDown(input, { keyCode: 50, which: 50 });
  fireEvent.change(input, {
    target: { value: '+91 12121-12', checked: false },
  });
  expect(onChange).toBeCalledWith('+91 12121-12');

  fireEvent.keyDown(input, { keyCode: 49, which: 49 });
  fireEvent.change(input, {
    target: { value: '+91 12121-121', checked: false },
  });
  expect(onChange).toBeCalledWith('+91 12121-121');

  fireEvent.blur(input);

  const selectedFlag = container.querySelector('.selected-flag');
  fireEvent.click(selectedFlag);
  const countryList = container.querySelectorAll(
    'div.country-list > div > div',
  );
  fireEvent.click(countryList[4]);

  // // verify the number of times onChange would have been called
  expect(onChange.mock.calls.length).toBe(4);
  expect(container.firstChild).toMatchSnapshot();
});

test('keyboard event up/down', () => {
  const props = {
    preferredCountries: ['af', 'al'],
    defaultCountry: 'in',
    flagsImagePath: '/flags.723494a4.png',
    initialValue: '+9112121',
    inputProps: {
      autoFocus: true,
    },
  };

  const { container } = render(<ReactTelephoneInput {...props} />);

  expect(container.firstChild).toMatchSnapshot();

  const selectedFlag = container.querySelector('.selected-flag');
  fireEvent.click(selectedFlag);
  const flagDropdown = container.querySelector('.flag-dropdown');
  for (let i = 0; i < 9; i += 1) {
    fireEvent.keyDown(flagDropdown, { keyCode: 40, which: 40 });
  }
  for (let i = 0; i < 18; i += 1) {
    fireEvent.keyDown(flagDropdown, { keyCode: 38, which: 38 });
  }

  fireEvent.keyDown(flagDropdown, { keyCode: 13, which: 13 });
  fireEvent.keyDown(flagDropdown, { keyCode: 13, which: 13 });
  fireEvent.keyUp(flagDropdown, { keyCode: 13, which: 13 });
  expect(container.firstChild).toMatchSnapshot();
});

test('Keyboard events with escape key at the end', () => {
  const props = {
    preferredCountries: ['af', 'al'],
    defaultCountry: 'in',
    flagsImagePath: '/flags.723494a4.png',
    initialValue: '+9112121',
    inputProps: {
      autoFocus: true,
    },
  };
  const { container } = render(<ReactTelephoneInput {...props} />);

  expect(container.firstChild).toMatchSnapshot();
  const selectedFlag = container.querySelector('.selected-flag');
  fireEvent.click(selectedFlag);
  const flagDropdown = container.querySelector('.flag-dropdown');
  for (let i = 0; i < 9; i += 1) {
    fireEvent.keyDown(flagDropdown, { keyCode: 40, which: 40 });
  }

  for (let i = 0; i < 9; i += 1) {
    fireEvent.keyDown(flagDropdown, { keyCode: 38, which: 38 });
  }
  fireEvent.keyDown(flagDropdown, { keyCode: 27, which: 27 });
  fireEvent.keyDown(flagDropdown, { keyCode: 27, which: 27 });
  fireEvent.keyUp(flagDropdown, { keyCode: 27, which: 27 });
});

test('Keyboard event with searching in the list', () => {
  const props = {
    preferredCountries: ['af', 'al'],
    defaultCountry: 'in',
    flagsImagePath: '/flags.723494a4.png',
    initialValue: '+9112121',
    inputProps: {
      autoFocus: true,
    },
  };
  const { container } = render(<ReactTelephoneInput {...props} />);

  expect(container.firstChild).toMatchSnapshot();

  const selectedFlag = container.querySelector('.selected-flag');
  fireEvent.click(selectedFlag);
  const flagDropdown = container.querySelector('.flag-dropdown');
  for (let i = 0; i < 4; i += 1) {
    fireEvent.keyDown(flagDropdown, { keyCode: 65, which: 65 });
  }

  const countryList = container.querySelectorAll(
    'div.country-list > div > div',
  );
  fireEvent.click(countryList[1]);

  const input = container.querySelector('input');
  fireEvent.keyDown(input, { keyCode: 91, which: 91 });
  fireEvent.keyDown(input, { keyCode: 91, which: 91 });
  expect(container.firstChild).toMatchSnapshot();
});
