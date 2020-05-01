import { Country } from './ReactTelephoneInput';

export default function replaceCountryCode(
  currentSelectedCountry: Country,
  nextSelectedCountry: Country,
  number: string,
) {
  const dialCodeRegex = RegExp(`^(${currentSelectedCountry.dialCode})`);
  const codeToBeReplaced = number.match(dialCodeRegex);
  const newNumber = number.replace(dialCodeRegex, nextSelectedCountry.dialCode);

  if (codeToBeReplaced === null && newNumber === number) {
    return nextSelectedCountry.dialCode + number;
  }
  return newNumber;
}
