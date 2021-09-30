let answer_object = {
  "some random key": 2,
  "another key": 4,
  "a key": 3,
  "a really long key": 1,
  "yet another key": 5,
  "one more key": 6
}

let answer_object_short = {
  "a key": 3,
  "another key": 4
}
  
let answer_object_long = {
  "some random key": 2,
  "a really long key": 1,
  "yet another key": 5,
  "one more key": 6
}

// console.log(Object.entries(answer_object))

const entriesByKeyLength = Object
  .entries(answer_object)
  .sort(([k1], [k2]) =>{
    return k1.length - k2.length
  });

console.log(entriesByKeyLength);

const answersShort = entriesByKeyLength.slice(0, 2);
const answersLong = entriesByKeyLength.slice(2);

// if the final result needs to be two objects instead of arrays
// const answersShort = Object.fromEntries(entriesByKeyLength.slice(0, 2));
// const answersLong = Object.fromEntries(entriesByKeyLength.slice(2));

