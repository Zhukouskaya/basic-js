const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let result;
  if (date === undefined) {
    return result = 'Unable to determine the time of year!';
  } 
  return result;
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
