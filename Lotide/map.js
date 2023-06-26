const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}
const results1 = map(words, word => word[0]);
console.log(results1);

const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false; 
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false; 
    }
  }
    return true;
  
}
const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: [${array1}] === [${array2}] \u{1F600}`);
  } 
  else {
    console.log(`Assertion Failed: [${array1}] !== [${array2}] \u{1F612}`);
  }
};



//Convert strings to uppercase
const names = ["Alice", "Bob", "Charlie"];
const uppercaseNames = map(names, name => name.toUpperCase());
assertArraysEqual(uppercaseNames, ["ALICE", "BOB", "CHARLIE"]);

//Multiply numbers by 2
const numbers = [1, 2, 3, 4, 5];
const multipliedNumbers = map(numbers, num => num * 2);
assertArraysEqual(multipliedNumbers, [2, 4, 8, 10]);

//Get the square of each number
const nums = [2, 4, 6, 8, 10];
const squaredNums = map(nums, num => num * num);
assertArraysEqual(squaredNums, [4, 16, 36, 64, 100]);