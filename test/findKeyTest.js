// Importing chai
const { assert } = require("chai");

//importing function
const findKey = require("../findKey");


//Test case
describe("#findKey", () => {
  let names = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  };

  it(`should return 'noma' when passed ${names} object and (x => x.stars === 2) as callback func`, () => {
    assert.strictEqual(findKey(names, x => x.stars === 2), "noma");
});

});