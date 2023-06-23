const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key in obj1) {
    if ((Array.isArray(obj1[key]) || Array.isArray(obj2[key])) && !eqArrays(obj1[key], obj2[key])) {
      return false;
    } else if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)} \u{1F600}`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} \u{1F612}`);
  }
};

// Test code
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { a: 2, b: 3 };

assertObjectsEqual(obj1, obj2); // Assertion Passed
assertObjectsEqual(obj1, obj3); // Assertion Failed
