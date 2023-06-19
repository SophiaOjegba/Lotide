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
const flatten = function(array) {
  let flattenedArray = [];
const flattener = function(arrayflatten) {
  if (typeof arrayflatten === "object" && arrayflatten !== null && Array.isArray(arrayflatten)) {
    for (let item of arrayflatten) {
      flattener(item);
    }
  } else {
    flattenedArray.push(arrayflatten);
  }
};
flattener(array);
return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]));