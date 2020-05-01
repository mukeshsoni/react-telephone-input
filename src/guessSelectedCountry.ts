import * as React from 'react';
// memoize results based on the first 5/6 characters. That is all that matters

import R from 'cramda';
import countryData from 'country-telephone-data';

const { find, propEq, startsWith } = R;
const { allCountries, allCountryCodes } = countryData;

type ISO2Name = string;

interface Country {
  name?: string;
  iso2?: ISO2Name;
  dialCode: string;
  priority: number;
  format?: string;
}

interface DefaultProps {
  autoFormat: boolean;
  onlyCountries: Array<Country>;
  defaultCountry: ISO2Name;
  isValid: (inputNumber: string) => boolean;
  flagsImagePath: string;
  onEnterKeyPress: () => void;
  preferredCountries: Array<ISO2Name>;
  disabled: boolean;
  placeholder: string;
  autoComplete: string; // TODO: find the exact list of acceptable strings
  required: boolean;
  inputProps: React.HTMLProps<HTMLInputElement>;
  buttonProps: React.HTMLProps<HTMLButtonElement>;
  listItemClassName: string;
  listStyle: React.CSSProperties;
}

type Props = {
  value?: string;
  initialValue?: string;
  classNames: string;
  className: string;
  inputId: string;
  onChange: (inputNumber: string, selectedCountry: Country) => void;
  onBlur: () => void;
  onFocus: () => void;
  pattern: string;
} & Partial<DefaultProps>;

export default function guessSelectedCountry(
  inputNumber: string,
  props: Props,
): Country {
  const defaultCountry = props.defaultCountry!;
  const onlyCountries = props.onlyCountries!;

  const secondBestGuess =
    find(propEq('iso2', defaultCountry), allCountries) || onlyCountries[0];

  const inputNumberForCountries = inputNumber.substr(0, 4);
  let bestGuess;

  if (inputNumber.trim() !== '') {
    bestGuess = onlyCountries.reduce(
      (selectedCountry: Country, country: Country) => {
        // if the country dialCode exists WITH area code

        if (
          allCountryCodes[inputNumberForCountries] &&
          allCountryCodes[inputNumberForCountries][0] === country.iso2
        ) {
          return country;

          // if the selected country dialCode is there with the area code
        } else if (
          allCountryCodes[inputNumberForCountries] &&
          allCountryCodes[inputNumberForCountries][0] === selectedCountry.iso2
        ) {
          return selectedCountry;

          // else do the original if statement
        }
        if (startsWith(country.dialCode, inputNumber)) {
          if (country.dialCode.length > selectedCountry.dialCode.length) {
            return country;
          }
          if (
            country.dialCode.length === selectedCountry.dialCode.length &&
            country.priority < selectedCountry.priority
          ) {
            return country;
          }
        }

        return selectedCountry;
      },
      { dialCode: '', priority: 10001 },
    );
  } else {
    return secondBestGuess;
  }

  if (!bestGuess || !bestGuess.name) {
    return secondBestGuess;
  }

  return bestGuess;
}
