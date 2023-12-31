// Importing chai
const assert = require('chai').assert;

//importing function
const head   = require('../head');

//Test case
describe("#head", () => {
  it("return 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});