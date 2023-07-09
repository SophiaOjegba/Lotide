const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');
const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual');

describe('#assertObjectsEqual', () => {
  it('should fail when objects are not equal', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 3 };
    assert.strictEqual(assertObjectsEqual(obj1, obj2), undefined);
  });

  it('should pass when objects are equal', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    assert.deepEqual(assertObjectsEqual(obj1, obj2), undefined);
  });
});
