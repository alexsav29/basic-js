const { NotImplementedError } = require('../lib');

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

function encodeLine(str) {
  str = String(str);
  if (str.length === 0) return '';

  let res = '';
  let count = 1;

  for (let i = 1; i <= str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      res += (count > 1 ? String(count) : '') + str[i - 1];
      count = 1;
    }
  }

  return res;
}

module.exports = {
  encodeLine
};
