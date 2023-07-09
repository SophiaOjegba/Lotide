const eqObjects = require("./eqObjects");


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)} \u{1F600}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} \u{1F612}`);
  }
};


module.exports = assertObjectsEqual;
