// Importing the eqArrays function from './eqArrays' file
const eqArrays = require('./eqArrays');

// Importing the assertArraysEqual function from './assertArraysEqual' file
const assertArraysEqual = require('./assertArraysEqual');

// Defining the without function
const without = function(source, remove) {
  const array = [];

  // Iterating over the elements in the source array
  for (let numbers of source) {
    // Checking if the current element is not included in the remove array
    if (!remove.includes(numbers)) {
      // If the current element is not in the remove array, push it to the array
      array.push(numbers);
    }
  }

  // Returning the new array
  return array;
};

// Exporting the without function
module.exports = without;
