const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct !== false;
  }

  _validateArgs(a, b) {
    if (a === undefined || b === undefined) throw new Error('Incorrect arguments!');
  }

  _normalize(str) {
    return String(str).toUpperCase();
  }

  _isLetter(ch) {
    return ch >= 'A' && ch <= 'Z';
  }

  _process(message, key, encode = true) {
    const m = this._normalize(message);
    const k = this._normalize(key);
    let result = '';
    let keyIndex = 0;
    const keyLen = k.length;

    for (let i = 0; i < m.length; i++) {
      const ch = m[i];
      if (!this._isLetter(ch)) {
        result += ch;
        continue;
      }

      // find next key letter (key may contain non-letters, but per spec key is a string of letters; handle robustly)
      while (keyLen > 0 && !this._isLetter(k[keyIndex % keyLen])) {
        keyIndex++;
      }
      const keyChar = k[keyIndex % keyLen];
      const mCode = ch.charCodeAt(0) - 65;
      const kCode = keyChar.charCodeAt(0) - 65;

      let resCode;
      if (encode) {
        resCode = (mCode + kCode) % 26;
      } else {
        resCode = (mCode - kCode + 26) % 26;
      }
      result += String.fromCharCode(resCode + 65);
      keyIndex++;
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    this._validateArgs(message, key);
    return this._process(message, key, true);
  }

  decrypt(encryptedMessage, key) {
    this._validateArgs(encryptedMessage, key);
    return this._process(encryptedMessage, key, false);
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
