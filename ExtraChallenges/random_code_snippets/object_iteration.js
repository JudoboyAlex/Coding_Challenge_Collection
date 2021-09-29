// https://www.reddit.com/r/learnjavascript/comments/poxrod/after_determining_frequency_of_numbers_in_an/

let obj = {
  1: 2,
  2: 2,
  3: 2,
  7: 1
}

let numbers = [1, 2, 3, 1, 2, 3, 7]; 

[1, 2, 3, 1, 2, 3, 7].reduce((unique, number, _, array) => {
  if (unique !== -1) return unique
  const isUnique = array.indexOf(number) === array.lastIndexOf(number)
  return isUnique ? number : unique
}, -1) // 7

function swap(idx1, idx2, arr) {
  const temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

const swap = (idx1, idx2, arr) => [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];

// const [fruit, …nums] =['apples', 5, 6, 7, 8, 9]
// console.log(fruit) //apples
// console.log(nums) //[5,6,7,8,9]

const [ key ] = Object.entries(obj).find(([, value]) => value === 1)

var keyTarget = (obj, count) => { for (let val in obj) { if (obj[val] === 1) { return Number(val); } } };