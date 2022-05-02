const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== "string") {
    return false;
  }

  const activity = +sampleActivity;

  if (isNaN(activity) || activity <= 0 || activity > MODERN_ACTIVITY) {
    return false;
  }

  return Math.ceil(
    Math.log(MODERN_ACTIVITY / +sampleActivity) / (0.693 / HALF_LIFE_PERIOD)
  );
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};


// Carbon dating - 8.43373494 ||
// Common character count - 1.204819277 ||
// Delete digit - 1.204819277 ||
// DNS stats - 1.204819277 ||
// Encode line - 1.204819277 ||
// File names - 1.204819277 ||
// Get email domain - 1.204819277 ||
// Hanoi tower - 2.409638554 ||
// MAC address - 1.204819277 ||
// Matrix elements sum - 1.204819277 
// Minesweeper - 1.204819277
// Recursive depth - 4.819277108 ||
// Make chain! - 6.024096386 ||
// Sort by height - 1.204819277 ||
// Sum digits - 1.204819277 ||
// Transform array - 9.638554217 ||
// Vigenere cipher - 9.638554217



// Done 
// Count cats! - 10.84337349
// Dream team - 10.84337349
// Extended repeater - 13.25301205


// part 
// What season - 10.84337349 (4)