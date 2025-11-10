const { NotImplementedError } = require('../lib');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;

  const letters = [];
  for (const m of members) {
    if (typeof m !== 'string') continue;
    const trimmed = m.trim();
    if (trimmed.length === 0) continue;
    letters.push(trimmed[0].toUpperCase());
  }

  return letters.sort().join('');
}

module.exports = {
  createDreamTeam
};
