const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  function getLettersNumber(word) {
    const q = word.toLowerCase().split('');
    
    return q
      .reduce((el, i) => {
        el[i] = el[i] ? ++el[i] : 1;
  
        return el;
      }, {});
  }
  const word1LettersNumber = getLettersNumber(s1);
  const word2LettersNumber = getLettersNumber(s2);
  let result = 0;

  for (let word1Letter of Object.entries(word1LettersNumber)) {
    const word1LetterNumber = word1Letter[1];
    const word2LetterNumber = word2LettersNumber[word1Letter[0]];

    if (word1LetterNumber && word2LetterNumber) {
      result += Math.min(word1LetterNumber, word2LetterNumber);
    }
  }

  return result;
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};
