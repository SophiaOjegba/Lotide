const { assert } = require("chai");
const without = require("../without");

describe("#without", () => {
  it("shoudl return [ 'am', 'nice'] when passed ['I', 'am', 'nice'] and the value not to include: ['lighthouse']", () => {
    assert.deepEqual(without(['I', 'am', 'nice'], ['I']), [  'am', 'nice' ]);
  });
});