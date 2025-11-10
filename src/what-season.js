const { NotImplementedError } = require('../lib');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  if (date === undefined) return 'Unable to determine the time of year!';

  // Basic duck detection and validation
  if (!(date instanceof Date)) throw new Error('Invalid date!');
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('Invalid date!');

  // Detect tampering / fake Date objects (own properties indicate a fake wrapper)
  if (Object.getOwnPropertyNames(date).length > 0) throw new Error('Invalid date!');

  // Ensure internal time retrieval works (will throw for some fakes)
  try {
    // also guard against NaN time
    const t = date.getTime();
    if (!isFinite(t)) throw new Error('Invalid date!');
  } catch (e) {
    throw new Error('Invalid date!');
  }

  const month = date.getMonth(); // 0..11
  if (month === 11 || month === 0 || month === 1) return 'winter';
  if (month >= 2 && month <= 4) return 'spring';
  if (month >= 5 && month <= 7) return 'summer';
  return 'autumn';
}

module.exports = {
  getSeason
};
