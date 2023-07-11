// Defining the takeUntil function
const takeUntil = function(array, callback) {
  // Iterating over the elements in the array
  for (let i = 0; i < array.length; i++) {
    // Checking if the callback function returns a truthy value for the current element
    if (callback(array[i])) {
      // If the callback returns true, return a new array containing elements until the current index
      return array.slice(0, i);
    }
  }
  
  // If the callback never returns true, return a new array containing all elements in the original array
  return array.slice();
};

// Exporting the takeUntil function
module.exports = takeUntil;
