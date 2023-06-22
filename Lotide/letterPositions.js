const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false; 
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false; 
    }
  }
    return true;
  
}

const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: [${array1}] === [${array2}] \u{1F600}`);
  } 
  else {
    console.log(`Assertion Failed: [${array1}] !== [${array2}] \u{1F612}`);
  }
};

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