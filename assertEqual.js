// Defining the assertEqual function
const assertEqual = function(actual, expected) {
  // Checking if the actual and expected values are equal
  if (actual === expected) {
    // If the values are equal, log an assertion passed message to the console
    console.log(`Assertion Passed: ${actual} === ${expected} \u{1F600}`);
  } else {
    // If the values are not equal, log an assertion failed message to the console
    console.log(`Assertion Failed: ${actual} !== ${expected} \u{1F612}`);
  }
};

// Exporting the assertEqual function
module.exports = assertEqual;




