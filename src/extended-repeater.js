const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options = {}) {
  const s = String(str);

  const repeatTimes = options.repeatTimes;
  const separator = options.separator === undefined ? '+' : String(options.separator);

  const hasAddition = Object.prototype.hasOwnProperty.call(options, 'addition');
  const addition = hasAddition ? String(options.addition) : undefined;
  const additionRepeatTimes = options.additionRepeatTimes;
  const additionSeparator = options.additionSeparator === undefined ? '|' : String(options.additionSeparator);

  // build addition part
  let additionPart = '';
  if (hasAddition) {
    if (typeof additionRepeatTimes === 'number' && additionRepeatTimes > 0) {
      const parts = new Array(additionRepeatTimes).fill(addition);
      additionPart = parts.join(additionSeparator);
    } else {
      additionPart = addition;
    }
  }

  // build full repeated unit
  const unit = s + additionPart;

  if (typeof repeatTimes === 'number' && repeatTimes > 0) {
    return new Array(repeatTimes).fill(unit).join(separator);
  } else {
    return unit;
  }
}

module.exports = {
  repeater
};
