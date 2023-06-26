const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }return 'undefined';
}

const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected} \u{1F600}`);
  }
  else{
    console.log(`Assertion Failed: ${actual} !== ${expected} \u{1F612}`);
  }
};


const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); 
assertEqual(result, "noma");


const object2 = {
  "key1": { value: "apple" },
  "key2": { value: "banana" },
  "key3": { value: "cherry" }
};
const result3 = findKey(object2, x => x.value === "banana");
assertEqual(result3, "key2");

const result4 = findKey(object2, x => x.value === "grape");
assertEqual(result4, "undefined");







