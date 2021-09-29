// 2d array for Connect Four  

let rows = 7;
let cols = 7;

const grid = [
  ...Array.from({ length: rows - 1 }, _ => Array(cols).fill('-')),
  Array.from({ length: cols }, (_, i) => i + 1)
];

console.log(grid)


// console.log(Array.from('foo'));
// expected output: Array ["f", "o", "o"]

// console.log(Array.from([1, 2, 3], x => x + x));
// expected output: Array [2, 4, 6]