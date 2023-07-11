// Importing the eqArrays function from './eqArrays' file
const eqArrays = require('./eqArrays');

// Defining the assertArraysEqual function
const assertArraysEqual = function(array1, array2){
  // Checking if the arrays are equal using eqArrays function
  if (eqArrays(array1, array2)) {
    // If arrays are equal, log assertion passed message to the console
    console.log(`Assertion Passed: [${array1}] === [${array2}] \u{1F600}`);
  } 
  else {
    // If arrays are not equal, log assertion failed message to the console
    console.log(`Assertion Failed: [${array1}] !== [${array2}] \u{1F612}`);
  }
};

// Exporting the assertArraysEqual function
module.exports = assertArraysEqual;
