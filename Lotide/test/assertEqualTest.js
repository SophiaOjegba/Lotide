const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe('#assertEqual', () => {
  it('should pass when actual and expected values are equal', () => {
    const actual = 5;
    const expected = 5;
    assert.strictEqual(assertEqual(actual, expected), undefined);
  });

  it('should fail when actual and expected values are not equal', () => {
    const actual = 'Hello';
    const expected = 'World';
    assert.strictEqual(assertEqual(actual, expected), undefined);
  });
});
