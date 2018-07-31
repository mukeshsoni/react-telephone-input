export default function replaceCountryCode(
  currentSelectedCountry,
  nextSelectedCountry,
  number,
) {
  const dialCodeRegex = RegExp(`^(${currentSelectedCountry.dialCode})`)
  const newNumber = number.replace(dialCodeRegex, nextSelectedCountry.dialCode)
  return newNumber
}
