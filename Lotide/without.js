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
}

const without = function(source, remove) {
  const array = [];
  for (let numbers of source) {
    if (!remove.includes(numbers)) {
      array.push(numbers);
    }
  }
  return array;
};


const words = ["I", "am", "Nice"];
without(words, ["I"]); 
console.log(assertArraysEqual(words, ["I", "am", "Nice"]));