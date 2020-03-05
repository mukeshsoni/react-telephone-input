import R from 'cramda'
import countryData from 'country-telephone-data'

export default function isNumberValid(inputNumber) {
  const countries = countryData.allCountries
  return R.any(country => (R.startsWith(country.dialCode, inputNumber)
    || R.startsWith(inputNumber, country.dialCode)
  ), countries)
}
