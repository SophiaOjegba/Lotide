// Importing chai
const { assert } = require("chai");

//importing function
const countOnly = require("../countOnly");

//Test case
describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  it("should return { Fang: 2, Jason: 1 } for { 'Jason': true, 'Karima': true, 'Fang': true }", () => {
    assert.deepEqual(countOnly(firstNames, { 'Jason': true, 'Karima': true, 'Fang': true }), { Fang: 2, Jason: 1 });
  });
 
});