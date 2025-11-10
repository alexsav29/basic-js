const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const e = String(email);
  const parts = e.split('@');
  return parts[parts.length - 1];
}

module.exports = {
  getEmailDomain
};
