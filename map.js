// Defining an array of words
const words = ["ground", "control", "to", "major", "tom"];

// Defining the map function
const map = function(array, callback) {
  const results = [];

  // Iterating over the items in the array
  for (let item of array) {
    // Calling the callback function on each item and pushing the result to the results array
    results.push(callback(item));
  }

  // Returning the results array
  return results;
};

// Example usage of the map function
const results1 = map(words, word => word[0]);
console.log(results1); // Output: ['g', 'c', 't', 'm', 't']

// Importing the eqArrays function from './eqArrays' file
const eqArrays = require('./eqArrays');

// Importing the assertArraysEqual function from './assertArraysEqual' file
const assertArraysEqual = require('./assertArraysEqual');

// Exporting the map function
module.exports = map;
