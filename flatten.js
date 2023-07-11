// Importing the assertArraysEqual function from './assertArraysEqual' file
const assertArraysEqual = require('./assertArraysEqual');

// Importing the eqArrays function from './eqArrays' file
const eqArrays = require('./eqArrays');

// Defining the flatten function
const flatten = function(array) {
  let flattenedArray = [];
  
  // Recursive helper function to flatten the array
  const flattener = function(arrayflatten) {
    if (typeof arrayflatten === "object" && arrayflatten !== null && Array.isArray(arrayflatten)) {
      // If the element is an array, recursively call the flattener function for each item
      for (let item of arrayflatten) {
        flattener(item);
      }
    } else {
      // If the element is not an array, push it to the flattenedArray
      flattenedArray.push(arrayflatten);
    }
  };
  
  // Call the flattener function with the input array
  flattener(array);
  
  // Return the flattenedArray
  return flattenedArray;
};

// Exporting the flatten function
module.exports = flatten;
