const { assert } = require("chai");
const findKeyByValue = require("../findKeyByValue");

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