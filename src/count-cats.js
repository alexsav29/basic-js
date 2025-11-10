const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  if (!Array.isArray(matrix)) return 0;

  let count = 0;
  for (const row of matrix) {
    if (!Array.isArray(row)) continue;
    for (const cell of row) {
      if (cell === '^^') count++;
    }
  }
  return count;
}

module.exports = {
  countCats
};
