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
function deleteDigit(n) {
  let biggest = 0;
  let nArray = n.toString().split('');
  nArray = nArray.map(elem => + elem);
  nArray.forEach((digit, index) => {
     const tempArray = [...nArray];
      tempArray.splice(index, 1);
      if (biggest < +tempArray.join('')) {
          biggest = +tempArray.join('');
      }
  })
  return biggest;
}

module.exports = {
  deleteDigit
};
