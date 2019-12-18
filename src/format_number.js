import R from 'cramda'

const { first, tail } = R

function formatNumber(text, pattern, autoFormat, length) {
  if (!text || text.length === 0) {
    return '+'
  }

  // for all strings with length less than 3, just return it (1, 2 etc.)
  // also return the same text if the selected country has no fixed format
  if ((text && text.length < 2) || !pattern || !autoFormat) {
    return `+${text}`
  }

  if (length === null) {
    length = text.length;
  }

  if (text.length > length) {
    text = text.substring(0, length-1);
  }

  const formattedObject = pattern.split('').reduce(
    (acc, character) => {
      if (acc.remainingText.length === 0) {
        return acc
      }

      if (character !== '.') {
        return {
          formattedText: acc.formattedText + character,
          remainingText: acc.remainingText,
        }
      }

      return {
        formattedText: acc.formattedText + first(acc.remainingText),
        remainingText: tail(acc.remainingText),
      }
    },
    { formattedText: '', remainingText: text.split('') },
  )
  return formattedObject.formattedText + formattedObject.remainingText.join('')
}

export default formatNumber
