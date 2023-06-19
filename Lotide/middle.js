const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)) {
    console.log(`Assertion Passed: [${array1}] === [${array2}] \u{1F600}`);
  } 
  else {
    console.log(`Assertion Failed: [${array1}] !== [${array2}] \u{1F612}`);
  }
}

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
const middle = function(array) {
  const length = array.length;
  const middleNumber = Math.floor(length / 2);
  if (length % 2 === 0) {
    return [array[middleNumber - 1], array[middleNumber]];
  } else {
    return array[middleNumber];
  }
};
console.log(middle([1, 2, 3, 4, 5, 6]));