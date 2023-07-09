const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require('./eqArrays');
const middle = function(array) {
  const length = array.length;
  const middleNumber = Math.floor(length / 2);
  if (length % 2 === 0) {
    return [array[middleNumber - 1], array[middleNumber]];
  } else {
    return [array[middleNumber]];
  }
};
module.exports = middle;
