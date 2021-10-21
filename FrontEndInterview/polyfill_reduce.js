Array.prototype.myReduce = function(fn, initial){
  let values = this;

  values.forEach(item => {
    initial = initial !== undefined ? fn(initial, item): item
  })
  return initial;
}

let values = [3,3,4]
let reduceResult = values.myReduce((a,b) => a + b, 5);

console.log(reduceResult); // 15

// Example
const users = [
  { name: 'John', age: 34},
  { name: 'Mehdi', age: 19},
  { name: 'Alex', age: 10}
];

const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges); //63

Array.prototype.newReduce = function (callback, startingValue) {
  // as starting value is an optional param
  // make a check
  let accumulator = startingValue || undefined;
  for (let index = 0; index < this.length; index++) {
    if (accumulator) {
      accumulator = callback.call(accumulator, accumulator, this[index], index, this)
      // accumulator = callback(this[index], accumulator) <-- this works too
    } else {
      accumulator = this[index]
    }
  }
  return accumulator;
}

let values2 = [3,3,4]
let result = values2.newReduce((a,b) => a + b, 3);

console.log(result); // 15