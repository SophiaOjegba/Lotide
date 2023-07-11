

// Importing the assertEqual function from './assertEqual' file
const assertEqual = require('./assertEqual');

// Defining the eqArrays function
const eqArrays = function(a, b) {
  // Checking if the lengths of arrays a and b are equal
  if (a.length !== b.length) {
    return false; // If the lengths are different, the arrays are not equal
  }

  // Comparing the elements of arrays a and b at corresponding indices
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false; // If any pair of elements is not equal, the arrays are not equal
    }
  }
  
  // If all elements are equal, the arrays are equal
  return true;
};

// Exporting the eqArrays function
module.exports = eqArrays;
