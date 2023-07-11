// Importing chai
const { assert } = require("chai");

//importing function
const flatten = require("../flatten");

//Test case
describe("#flatten", () => {
  it("should return [1, 2, 3, 4, 5, 6] when passed [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});