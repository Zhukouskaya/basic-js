const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sortedByValues = arr
  .map((x, i) => ({
      index: i,
      value: x
  }))
  .filter(x => x.value !== -1)
  .sort((a, b) => a.value - b.value);
const sortedIndexes = sortedByValues
  .map(x => x.index)
  .sort((a, b) => a - b);
const sortedByValuesWithIndexes = sortedByValues
  .map((x, i) => ({
      index: sortedIndexes[i],
      value: x.value
  }));

for (let i of sortedByValuesWithIndexes) {
  arr[i.index] = i.value;
}

return arr;
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
