const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  _chain: [],

  getLength() {
    return this._chain.length;
  },

  addLink(value) {
    // if called without arguments, we should add an empty link
    if (arguments.length === 0) {
      this._chain.push(undefined);
    } else {
      this._chain.push(value);
    }
    return this;
  },

  removeLink(position) {
    if (
      typeof position !== 'number' ||
      !Number.isInteger(position) ||
      position < 1 ||
      position > this._chain.length
    ) {
      this._chain = []; // clear chain as if error occured
      throw new Error("You can't remove incorrect link!");
    }

    // remove by 1-based position
    this._chain.splice(position - 1, 1);
    return this;
  },

  reverseChain() {
    this._chain.reverse();
    return this;
  },

  finishChain() {
    const res = this._chain
      .map((v) => {
        if (v === undefined) return '(  )';
        return `( ${String(v)} )`;
      })
      .join('~~');

    this._chain = [];
    return res;
  },
};

module.exports = {
  chainMaker,
};
