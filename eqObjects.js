// Importing the assertEqual function from './assertEqual' file
const assertEqual = require('./assertEqual');

// Importing the eqArrays function from './eqArrays' file
const eqArrays = require('./eqArrays');

// Defining the eqObjects function
const eqObjects = function(obj1, obj2) {
  // Checking if the number of keys in obj1 and obj2 is equal
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false; // If the number of keys is different, the objects are not equal
  }

  // Iterating over the keys in obj1
  for (let key in obj1) {
    // Checking if the value at the current key is an array in either obj1 or obj2
    if ((Array.isArray(obj1[key]) || Array.isArray(obj2[key])) && eqArrays(obj1[key], obj2[key]) === false) {
      return false; // If arrays are involved and not equal, the objects are not equal
    }
    // Checking if the value at the current key is an array in either obj1 or obj2
    else if (Array.isArray(obj1[key]) || Array.isArray(obj2[key])) {
      eqArrays(obj1[key], obj2[key]); // If arrays are involved, compare them using eqArrays
    }
    // Comparing the values at the current key
    else if (obj1[key] !== obj2[key]) {
      return false; // If any pair of values is not equal, the objects are not equal
    }
  }

  // If all keys and values are equal, the objects are equal
  return true;
}

// Exporting the eqObjects function
module.exports = eqObjects;
