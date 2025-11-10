const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  // treat inputs as strings
  const a = String(s1);
  const b = String(s2);

  const freq = new Map();
  for (const ch of a) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  let common = 0;
  for (const ch of b) {
    const count = freq.get(ch) || 0;
    if (count > 0) {
      common++;
      freq.set(ch, count - 1);
    }
  }

  return common;
}

module.exports = {
  getCommonCharacterCount
};
