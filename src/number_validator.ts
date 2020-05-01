import R from 'cramda';
import countryData from 'country-telephone-data';
import { Country } from './ReactTelephoneInput';

export default function isNumberValid(inputNumber: string) {
  const countries = countryData.allCountries;
  return R.any(
    (country: Country) =>
      R.startsWith(country.dialCode, inputNumber) ||
      R.startsWith(inputNumber, country.dialCode),
    countries,
  );
}
