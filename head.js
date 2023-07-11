// Importing the assertEqual function from './assertEqual' file
const assertEqual = require('./assertEqual');

// Defining the head function
const head = function(array) {
  // Checking if the array is empty
  if (array.length === 0) {
    return undefined; // If the array is empty, return undefined
  }
  
  // Returning the first element of the array
  return array[0];
};

// Example usage of the head function
let myArray = head([5, 6, 7]);
console.log(myArray); // Output: 5

// Exporting the head function
module.exports = head;
