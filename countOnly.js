// Importing the assertEqual function from './assertEqual' file
const assertEqual = require('./assertEqual');

// Defining the countOnly function
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  
  // Iterating over each item in the allItems array
  for (const item of allItems) {
    // Checking if the current item should be counted based on the itemsToCount object
    if (itemsToCount[item]) {
      // Checking if the item already exists in the results object
      if (results[item]) {
        // If the item exists, increment its count by 1
        results[item]++;
      } else {
        // If the item doesn't exist, initialize its count to 1
        results[item] = 1;
      }
    }
  }
  
  // Logging each item in the allItems array
  for (const item of allItems) {
    console.log(item);
  }
  
  // Returning the results object with the counts of the specified items
  return results;
};

// Exporting the countOnly function
module.exports = countOnly;
