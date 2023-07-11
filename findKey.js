// Importing the assertEqual function from './assertEqual' file
const assertEqual = require('./assertEqual');

// Defining the findKey function
const findKey = function(object, callback) {
  // Iterating over the keys in the object
  for (let key in object) {
    // Checking if the callback function returns a truthy value for the current object[key]
    if (callback(object[key])) {
      // If the callback returns true, return the current key
      return key;
    }
  }
  
  // If no matching key is found, return 'undefined'
  return 'undefined';
}

// Exporting the findKey function
module.exports = findKey;









