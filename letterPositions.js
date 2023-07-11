// Importing the eqArrays function from './eqArrays' file
const eqArrays = require('./eqArrays');

// Importing the assertArraysEqual function from './assertArraysEqual' file
const assertArraysEqual = require('./assertArraysEqual');

// Defining the letterPositions function
const letterPositions = function(sentence) {
  const results = {};

  // Iterating over the characters in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];

    // Ignoring whitespace characters
    if (letter !== ' ') {
      if (results[letter]) {
        // If the letter already exists as a key in the results object, push the index to its value array
        results[letter].push(i);
      } else {
        // If the letter does not exist as a key, create a new key with an array containing the index
        results[letter] = [i];
      }
    }
  }

  // Returning the results object
  return results;
};

// Exporting the letterPositions function
module.exports = letterPositions;
