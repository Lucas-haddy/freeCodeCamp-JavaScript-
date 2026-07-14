const isPalindrome = (word) => {
  const lowered = word.toLowerCase();
  for (let i = 0; i < lowered.length; i++) {
    const revIndex = lowered.length - 1 - i;
    if (lowered[i] != lowered[revIndex]) {
      return false;
    }
  }
  return true;
}

const findPalindromeBreaks = (words) => {
  const found = [];
  for (let i = 0; i < words.length; i++) {
    if (isPalindrome(words[i]) === false) {
      found.push(i);
    }
  }
  return found
}

const findRepeatedPhrases = (words, phraseLength) => {
  if (phraseLength >= words.length) {
    return [];
  }
  const indices = [];
  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(' ');
    let match = 0;
    for (let c = 0; c <= words.length - phraseLength; c++) {
      const comparePhrase = words.slice(c, c + phraseLength).join(' ');
      if (phrase === comparePhrase) {
        match++;
      }
    }
    if (match > 1) {
      indices.push(i)
    }
  }
  return indices;
};

const analyzeTexts = (texts, phraseLength) => {
  if (texts.length === 0) {
    return [];
  }
  const results = [];
  for (let i = 0; i < texts.length; i++) {
    const currentTexts = texts[i];
    const palindromeBreaks = findPalindromeBreaks(currentTexts);
    const repeatedPhrases = findRepeatedPhrases(currentTexts, phraseLength);
    results.push({
      repeatedPhrases: repeatedPhrases,
      palindromeBreaks: palindromeBreaks
    });
  }
  return results;
}