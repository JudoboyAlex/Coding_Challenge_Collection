var fs = require('fs');
var arr = fs.readFileSync('resource.txt').toString().split("\n").map((n) => n.split("").map(Number))

// let arr = [
// [2,1,9,9,9,4,3,2,1,0],
// [3,9,8,7,8,9,4,9,2,1],
// [9,8,5,6,7,8,9,8,9,2],
// [8,7,6,7,8,9,6,7,8,9],
// [9,8,9,9,9,6,5,6,7,8]
// ]
// 1,0,5,5 => 2,1,6,6 = 15

 const findSmallest =  (grid) => {
  let sum = 0;
  let arr = [];
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
      const num = grid[row][col];
      const top = (grid[row-1] && grid[row-1][col]) !== undefined ? grid[row-1][col] : Infinity;
      const right = grid[row][col+1] !== undefined ? grid[row][col+1] : Infinity;
      const bottom = (grid[row+1] && grid[row+1][col]) !== undefined ? grid[row+1][col] : Infinity;;
      const left = grid[row][col-1] !== undefined ? grid[row][col-1] : Infinity;
      
      if (num < top && num < right && num < bottom && num < left) {
        arr.push(num)
        sum += 1 + num;
      }
    }
  }
  console.log(arr)
  return sum;
}

console.log(findSmallest(arr))