const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (!Array.isArray(matrix) || matrix.length === 0) return 0;

  const rows = matrix.length;
  const cols = matrix[0].length || 0;
  let sum = 0;

  for (let j = 0; j < cols; j++) {
    for (let i = 0; i < rows; i++) {
      const val = matrix[i][j];
      if (val === 0) break;
      sum += val;
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
