// Importing the assertEqual function from './assertEqual' file
const assertEqual = require('./assertEqual');

// Defining the countLetters function
function countLetters(sentence) {
  var result = {};
  
  // Removing whitespace and converting the sentence to lowercase
  const newSentence = sentence.replace(/\s/g, "").toLowerCase();
  
  // Initializing each character in the sentence as a key in the result object with a value of 0
  for (const char in newSentence) {
    result[newSentence[char]] = 0;
  }
  
  // Counting the occurrences of each character in the original sentence
  for (const char in sentence) {
    result[newSentence[char]]++;
  }

  return result;
};

// Exporting the countLetters function
module.exports = countLetters;
