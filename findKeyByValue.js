// Importing the assertEqual function from './assertEqual' file
const assertEqual = require('./assertEqual');

// Defining the findKeyByValue function
const findKeyByValue = function(object, value) {
  // Iterating over the keys in the object using Object.keys
  for (const key of Object.keys(object)) {
    // Checking if the current value at the key matches the provided value
    if (object[key] === value) {
      return key; // If there is a match, return the key
    }
  }
  // If no matching key is found, return undefined
  return undefined;
}

// Exporting the findKeyByValue function
module.exports = findKeyByValue;
