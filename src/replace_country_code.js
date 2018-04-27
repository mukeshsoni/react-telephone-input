export default function replaceCountryCode(
  currentSelectedCountry,
  nextSelectedCountry,
  number
) {
  var dialCodeRegex = RegExp("^(" + currentSelectedCountry.dialCode + ")")
  var newNumber = number.replace(dialCodeRegex, nextSelectedCountry.dialCode)

  // if we couldn't find any replacement, just attach the new country's dial code at the front
  if (newNumber === number) {
    return nextSelectedCountry.dialCode + number
  } else {
    return newNumber
  }
}
