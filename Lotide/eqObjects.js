const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected} \u{1F600}`);
  }
  else{
    console.log(`Assertion Failed: ${actual} !== ${expected} \u{1F612}`);
  }
};

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
  
};

const eqObjects = function(obj1, obj2) {
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let i = 0; i < obj1.length; i++) {
    if ((Array.isArray(obj1[i]) || Array.isArray(obj2[i])) && eqArrays(obj1[i], obj2[i]) === false) {
      return false;
    } else if (Array.isArray(obj1[i]) || Array.isArray(obj2[i])) {
      eqArrays(obj1[i], obj2[i]);
    } else if (obj1[i] !== obj2[i]) {
      return false;
    }
  }
  return true;
 }

 const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
 const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
 console.log(assertEqual(eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject))); // => true
 
 const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
 console.log(assertEqual(eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject))); // => false