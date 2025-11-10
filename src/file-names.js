const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (!Array.isArray(names)) return [];

  const used = new Map(); // name -> next suffix to try
  const result = [];

  for (const original of names) {
    const name = String(original);
    if (!used.has(name)) {
      // name is free
      result.push(name);
      used.set(name, 1);
    } else {
      // find smallest k such that name(k) is free
      let k = used.get(name);
      let newName = `${name}(${k})`;
      while (used.has(newName)) {
        k++;
        newName = `${name}(${k})`;
      }
      result.push(newName);
      // update maps: next time start from k+1 for base name, and mark newName used starting from 1
      used.set(name, k + 1);
      used.set(newName, 1);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
