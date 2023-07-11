// Importing chai
const { assert } = require("chai");

//importing function
const findKeyByValue = require("../findKeyByValue");


//Test case
describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sciFi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  it(`should return 'drama' when passed ${bestTVShowsByGenre} and 'The Wire'`, () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
});