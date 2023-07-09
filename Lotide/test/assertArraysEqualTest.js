const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe('#assertArraysEqual', () => {
  it('should pass when arrays are equal', () => {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    assert.strictEqual(assertArraysEqual(array1, array2), undefined);
  });

  it('should fail when arrays are not equal', () => {
    const array1 = [1, 2, 3];
    const array3 = [3, 2, 1];
    assert.strictEqual(assertArraysEqual(array1, array3), undefined);
  });
});
