// Importing the eqObjects function from './eqObjects' file
const eqObjects = require("./eqObjects");

// Defining the assertObjectsEqual function
const assertObjectsEqual = function(actual, expected) {
  // Importing the inspect function from the 'util' module
  const inspect = require('util').inspect;
  
  // Checking if the actual and expected objects are equal using eqObjects function
  if (eqObjects(actual, expected)) {
    // If the objects are equal, log an assertion passed message to the console
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)} \u{1F600}`);
  } else {
    // If the objects are not equal, log an assertion failed message to the console
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} \u{1F612}`);
  }
};

// Exporting the assertObjectsEqual function
module.exports = assertObjectsEqual;
