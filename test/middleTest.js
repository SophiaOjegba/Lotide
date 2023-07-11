// Importing chai
const { assert } = require("chai");

//importing function
const middle = require("../middle");


//Test case
describe("#middle", () => {
  it("should return [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return [4] for [6,5,4,3,2]", () => {
    assert.deepEqual(middle([6,5,4,3,2]), [4]);
  });
});