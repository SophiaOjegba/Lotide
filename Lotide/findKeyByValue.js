const assertEqual = require('./assertEqual');

const findKeyByValue = function (object1, value){
  for (const item of Object.keys(object1)){
    if(object1[item] === value){
        return item;
    }
}
}

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;
