const { assert } = require("chai");
const tail = require("../tail");

describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
  it("returns 4 !== for words.length", () => {
    assert.notStrictEqual((words.length), 4);
  });
 
});