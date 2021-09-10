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
