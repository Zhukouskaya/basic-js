const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);

    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position < 1 || position > this.chain.length - 1) {
      this.chain = [];

      throw new Error("You can't remove incorrect link!");
    }

    this.chain = this.chain.filter((el, i) => i !== position - 1);

    return this;
  },
  reverseChain() {
    this.chain.reverse();

    return this;
  },
  finishChain() {
    const result = this.chain.map(el => `( ${el} )`).join("~~");

    this.chain = [];

    return result;
  },
};


module.exports = {
  chainMaker
};
