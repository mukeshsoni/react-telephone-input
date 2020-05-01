import * as React from 'react';
// memoize results based on the first 5/6 characters. That is all that matters

import R from 'cramda';
import countryData from 'country-telephone-data';

const { find, propEq, startsWith } = R;
const { allCountries, allCountryCodes } = countryData;
import { Country, Props } from './ReactTelephoneInput';

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
