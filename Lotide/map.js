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

const eqArrays = require ('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual');



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

module.exports = map;
