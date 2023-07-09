const assertArraysEqual = require('./assertArraysEqual');

const eqArrays = require ('./eqArrays')

const flatten = function(array) {
  let flattenedArray = [];
const flattener = function(arrayflatten) {
  if (typeof arrayflatten === "object" && arrayflatten !== null && Array.isArray(arrayflatten)) {
    for (let item of arrayflatten) {
      flattener(item);
    }
  } else {
    flattenedArray.push(arrayflatten);
  }
};
flattener(array);
return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));

module.exports = flatten;
