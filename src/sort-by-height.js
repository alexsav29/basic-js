const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!Array.isArray(arr)) return arr;

  const heights = arr.filter(v => v !== -1).sort((a, b) => a - b);
  const res = [];
  let idx = 0;

  for (const v of arr) {
    if (v === -1) {
      res.push(-1);
    } else {
      res.push(heights[idx++]);
    }
  }

  return res;
}

module.exports = {
  sortByHeight
};
