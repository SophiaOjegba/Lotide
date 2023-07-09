const assertEqual = require('./assertEqual');

function countLetters(sentence) {
  var result = {};
  const newSentence = sentence.replace(/\s/g, "").toLowerCase();
  
  for (const char in newSentence) {
    result[newSentence[char]] = 0;
  }
  
  for (const char in sentence) {
    result[newSentence[char]]++;
  }

  return result;
};

module.exports = countLetters;
