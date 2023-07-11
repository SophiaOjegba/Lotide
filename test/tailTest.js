// Importing chai
const { assert } = require("chai");

//importing function
const tail = require("../tail");

//Test case
describe("#tail", () => {
  const words = ["Yo Yo", "Lighthouse", "Labs"];
  it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
    assert.deepEqual(tail(words), ['Lighthouse', 'Labs']);
  });
  it("returns 4 !== for words.length", () => {
    assert.notStrictEqual((words.length), 4);
  });
 
});