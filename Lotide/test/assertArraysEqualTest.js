const assertArraysEqual = require('../assertArraysEqual');
const  eqArrays = require('../eqArrays');





//Test case

(assertArraysEqual([1, 2, 3], [1, 2, 3])); // Pass
(assertArraysEqual([1, 2, 3], [3, 2, 1])); // Fail
(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"])); // Pass
(assertArraysEqual(["1", "2", "3"], ["1", "2", 3])); // Fail