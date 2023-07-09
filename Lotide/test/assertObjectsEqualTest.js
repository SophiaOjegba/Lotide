
const assertObjectsEqual = require("../assertObjectsEqual");
const {assert} = require('chai').assert;


// Test code
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
const obj3 = { a: 2, b: 3 };

assertObjectsEqual(obj1, obj2); // Assertion Passed
assertObjectsEqual(obj1, obj3); // Assertion Failed

describe("#asserObjectsEqual", ()=> {
  it("should return object1 === object 2", ()=>{
    assert.deepEqual(assertObjectsEqual(obj1, obj2),obj1 === obj2);
  });
});