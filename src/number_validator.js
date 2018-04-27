import R from "cramda"
import countryData from "country-telephone-data"

export default function isNumberValid(inputNumber) {
  var countries = countryData.allCountries
  return R.any(function(country) {
    return (
      R.startsWith(country.dialCode, inputNumber) ||
      R.startsWith(inputNumber, country.dialCode)
    )
  }, countries)
}
