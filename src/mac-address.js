const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (typeof n !== 'string') return false;
  const re = /^([0-9A-F]{2}-){5}[0-9-A-F]{2}$/i; // allow case-insensitive, but validate chars and hyphens
  // Strict check: ensure pattern with hyphens and only hex digits
  // Use a case-insensitive regex but make sure only 0-9 A-F appear (i flag allows lowercase).
  return re.test(n) && /^([0-9A-F]{2}-){5}[0-9A-F]{2}$/.test(n.toUpperCase());
}

module.exports = {
  isMAC48Address
};
