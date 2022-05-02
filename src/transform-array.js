const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }

  const discardNext = "--discard-next";
  const discardPrevious = "--discard-prev";
  const doubleNext = "--double-next";
  const doublePrevious = "--double-prev";

  return arr
    .reduce((result, x, i, arr) => {
      switch (x) {
        case discardNext:
          if (i != arr.length - 1) {
            arr[i + 1] = null;
          }

          break;
        case discardPrevious:
          if (i) {
            result[i - 1] = null;
          }

          break;
        case doubleNext:
          if (i != arr.length - 1) {
            result.push(arr[i + 1]);
          }

          break;
        case doublePrevious:
          if (i) {
            result.push(result[i - 1]);
          }

          break;
        default:
          result.push(x);

          break;
      }

      return result;
    }, [])
    .filter((x) => !!x);
  // remove line with error and write your code here
}

module.exports = {
  transform
};
