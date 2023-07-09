const eqArrays = require ('./eqArrays')

const assertArraysEqual = require ('./assertArraysEqual')

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
};

//Test Code
console.log(assertArraysEqual(letterPositions("hello").e, [1]));

module.exports = letterPositions;
