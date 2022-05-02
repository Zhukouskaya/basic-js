const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
  function getSum(numbers, index) {
  return +numbers
    .reduce((sum, x, i) => i === index ? sum : sum + x, '');
}

function deleteDigit(n) {
  const numbers = n.toString().split('');
const results = [];

for (let i = 0; i < numbers.length; i++) {
  results.push(getSum(numbers, i));
}

return Math.max(...results);
  // remove line with error and write your code here
}

module.exports = {
  deleteDigit
};
