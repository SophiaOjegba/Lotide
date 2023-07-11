// Importing chai
const { assert } = require("chai");

//importing function
const letterPositions = require("../letterPositions");


//Test case
describe("#letterPositions", () => {
  let position = {
    h: [ 0 ],
    e: [ 1 ],
    l: [ 2, 3 ],
    o: [ 4 ]
  };

  it(`should return ${position} for 'hello'`, () => {
    assert.deepEqual(letterPositions("hello"), position);
  });
});