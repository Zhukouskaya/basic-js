const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const strArr = [];
  const addArr = [];
  if (options.addition === undefined) {
    if (options.separator === undefined) {
      options.separator = '+'
    }
      options.additionSeparator = ''
    let w = String(str);
     for (let i = 0; i < options.repeatTimes || i < 1; i++) {
      strArr.push(w)
    }
    return strArr.join(options.separator);
  } else {
    if (options.additionSeparator === undefined) {
    options.additionSeparator = '|'
  }
  if (options.separator === undefined) {
    options.separator = '+'
  }
  if (options.addition === undefined) {
    options.additionSeparator = ''
  }
  for (let i = 0; i < options.additionRepeatTimes || i < 1; i++) {
    addArr.push(String(options.addition))
  }
  let q = addArr.join(options.additionSeparator);
  let w = String(str) + q;
   for (let i = 0; i < options.repeatTimes || i < 1; i++) {
    strArr.push(w)
  }
  console.log(w)
  return strArr.join(options.separator);
  }
  // remove line with error and write your code here
}

module.exports = {
  repeater
};
