const { assert } = require("chai");
const takeUntil = require("../takeUntil");

describe("#takeUntil", () => {
  it("should return [ 'I've', 'been', 'to', 'Hollywood' ] when passed ['I've', 'been', 'to', 'Hollywood', ',', 'I've', 'been', 'to', 'Redwood'] and (x => x === ',') as callback", () => {
    assert.deepEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);
  });
});