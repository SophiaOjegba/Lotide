// Importing the assertEqual function from './assertEqual' file
const assertEqual = require('./assertEqual');

// Defining the tail function
const tail = function(array) {
  // Checking if the array length is less than or equal to 1
  if (array.length <= 1) {
    return []; // If the array has 0 or 1 element, return an empty array
  }
  
  // Returning a new array containing all elements except the first element
  return array.slice(1);
};

// Exporting the tail function
module.exports = tail;

