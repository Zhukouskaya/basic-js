const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

 function appendResult(lastLetter, letterCount) {
  return letterCount > 1 ? `${letterCount}${lastLetter}` : `${lastLetter}`;
}

function encodeLine(str) {
  const letters = str.split('');
  let result = '';
  let lastLetter = '';
  let letterCount = 0;

  for (let letter of letters) {
    if (lastLetter !== letter) {
      result += appendResult(lastLetter, letterCount);
      lastLetter = letter;
      letterCount = 1;
    } else {
      letterCount++;
    }
  }

  result += appendResult(lastLetter, letterCount);

  return result;
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
