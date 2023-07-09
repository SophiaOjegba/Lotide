const eqArrays = require ('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, remove) {
  const array = [];
  for (let numbers of source) {
    if (!remove.includes(numbers)) {
      array.push(numbers);
    }
  }
  return array;
};


const words = ["I", "am", "Nice"];
without(words, ["I"]); 
console.log(assertArraysEqual(words, ["I", "am", "Nice"]));

module.exports = without;
