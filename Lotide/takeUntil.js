const takeUntil = function(array, callback) {
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        return array.slice(0, i);
      }
    }
    return array.slice();
  }

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);