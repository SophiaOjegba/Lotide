// Importing the assertArraysEqual function from './assertArraysEqual' file
const assertArraysEqual = require('./assertArraysEqual');

// Importing the eqArrays function from './eqArrays' file
const eqArrays = require('./eqArrays');

// Defining the middle function
const middle = function(array) {
  const length = array.length;
  const middleNumber = Math.floor(length / 2);

  if (length % 2 === 0) {
    // If the array length is even, return the two middle elements
    return [array[middleNumber - 1], array[middleNumber]];
  } else {
    // If the array length is odd, return the middle element
    return [array[middleNumber]];
  }
};

// Exporting the middle function
module.exports = middle;
