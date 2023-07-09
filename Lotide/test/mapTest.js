const { assert } = require("chai");
const map = require("../map");

describe("#map", () => {
  
  it("should return [ 'g', 'c', 't', 'm', 't' ] when passed ['ground', 'control', 'to', 'major', 'tom'] and word => word[0] as callback", () => {
    assert.deepEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
      });
});