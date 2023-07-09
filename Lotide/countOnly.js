
const assertEqual = require('./assertEqual');
const countOnly = function(allItems, itemsToCount) {
  const results = {};
    for(const item of allItems){
      if (itemsToCount[item]){
        if (results[item]){
          results[item]++;
        }
        else{
          results[item] = 1;
        }
      }
    }
  for (const item of allItems) {
  console.log(item);
  }
    return results;
  
}

module.exports = countOnly;
