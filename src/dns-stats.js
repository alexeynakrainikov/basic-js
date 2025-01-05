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
    if (domains.length === 0) {
        return {};
    }
 const result = new Map ();
  domains = domains.map((elem) => {
      return elem.split('.');
    });
  domains.forEach((elem, index) => {
    result.set('.' + elem.at(-1), 1 + index);
    if (elem.length > 1) {
        result
        .set('.' + elem.at(-1)
        .concat('.')
        .concat(elem.at(-2)), 1 + index);
    }
    if (elem.length > 2) {
      let tempIndex = index;
      if (!result.has(elem)) {
        tempIndex = 0;
      }
      result
      .set('.' + elem.at(-1)
      .concat('.')
      .concat(elem.at(-2))
      .concat('.')
      .concat(elem.at(-3)), 1 + tempIndex);
    }
  });
  return Object.fromEntries(result);
}

module.exports = {
  getDNSStats
};
