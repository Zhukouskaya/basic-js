const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  return domains
  .map(el => el.split(".")).reduce((a, x) => {
    let acc = x.reduceRight((a2, x2) => {
      let key = a2.length ? `${a2[a2.length - 1]}.${x2}` : `.${x2}`;

      a2.push(key);

      return a2;
    }, []);

    acc.forEach(el => {
      if (a[el]) {
        a[el] += 1;
      } else {
        a[el] = 1;
      }
    });

    return a;
  }, {});
  // remove line with error and write your code here
}

module.exports = {
  getDNSStats
};
