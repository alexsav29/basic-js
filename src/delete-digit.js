const { NotImplementedError } = require('../lib');

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
  const s = String(n);
  let best = -Infinity;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '-') continue; // don't remove the minus sign
    const candidateStr = s.slice(0, i) + s.slice(i + 1);
    const candidateNum = Number(candidateStr);
    if (candidateNum > best) best = candidateNum;
  }

  return best;
}

module.exports = {
  deleteDigit
};
