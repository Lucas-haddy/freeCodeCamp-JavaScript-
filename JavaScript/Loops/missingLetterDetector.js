const fearNotLetter = (str) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let startIndex = alphabet.indexOf(str[0]);

  for (let i = 0; i < str.length; i++) {
    if (str[i] != alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }
  return undefined
}