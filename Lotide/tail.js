// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected} \u{1F600}`);
  }
  else{
    console.log(`Assertion Failed: ${actual} !== ${expected} \u{1F612}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const tail = function(array) {
  if (array.length <= 1) {
    return [];
  }
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
const tailResult = tail(words);
assertEqual(words.length, 3);
console.log(tailResult);
