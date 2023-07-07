const tail = require('../tail');
const assertEqual = require('../assertEqual');

//Test code
const words = ["Yo Yo", "Lighthouse", "Labs"];
const tailResult = tail(words);
assertEqual(words.length, 3);
console.log(tailResult);
