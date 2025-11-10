const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const res = [];
  let skippedIndex = -1; // index of element skipped by --discard-next

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];

    switch (el) {
      case '--discard-next':
        if (i + 1 < arr.length) {
          skippedIndex = i + 1;
          i++; // skip the next element
        }
        break;

      case '--discard-prev':
        if (i - 1 >= 0 && skippedIndex !== i - 1 && res.length > 0) {
          res.pop();
        }
        break;

      case '--double-next':
        if (i + 1 < arr.length) {
          res.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        if (i - 1 >= 0 && skippedIndex !== i - 1 && res.length > 0) {
          res.push(res[res.length - 1]);
        }
        break;

      default:
        res.push(el);
    }
  }

  return res;
}

module.exports = {
  transform
};
