export default function replaceCountryCode(
  currentSelectedCountry,
  nextSelectedCountry,
  number,
) {
  const dialCodeRegex = RegExp(`^(${currentSelectedCountry.dialCode})`)
  const newNumber = number.replace(dialCodeRegex, nextSelectedCountry.dialCode)

  // if we couldn't find any replacement, just attach the new country's dial code at the front
  if (newNumber === number) {
    return nextSelectedCountry.dialCode + number
  }
  return newNumber
}
