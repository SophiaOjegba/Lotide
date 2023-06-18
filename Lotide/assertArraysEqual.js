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

const assertArraysEquals = function(array1, array2){
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: [${array1}] === [${array2}] \u{1F600}`);
  } 
  else {
    console.log(`Assertion Failed: [${array1}] !== [${array2}] \u{1F612}`);
  }
};

assertArraysEquals([1, 2, 3], [1, 2, 3]); // Pass
assertArraysEquals([1, 2, 3], [3, 2, 1]); // Fail
assertArraysEquals(["1", "2", "3"], ["1", "2", "3"]); // Pass
assertArraysEquals(["1", "2", "3"], ["1", "2", 3]); // Fail