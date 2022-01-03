var fs = require('fs');
var arr = fs.readFileSync('resource.txt').toString().split("").filter(c => c !== ",").map(Number)
let days = 80;

// if there is 0, next row needs to create 8
// after 0, it's 6
// -1 after each row

/*
Initial state: 3,4,3,1,2
After  1 day:  2,3,2,0,1
After  2 days: 1,2,1,6,0,8
After  3 days: 0,1,0,5,6,7,8
After  4 days: 6,0,6,4,5,6,7,8,8
After  5 days: 5,6,5,3,4,5,6,7,7,8
After  6 days: 4,5,4,2,3,4,5,6,6,7
After  7 days: 3,4,3,1,2,3,4,5,5,6
After  8 days: 2,3,2,0,1,2,3,4,4,5
After  9 days: 1,2,1,6,0,1,2,3,3,4,8
After 10 days: 0,1,0,5,6,0,1,2,2,3,7,8
After 11 days: 6,0,6,4,5,6,0,1,1,2,6,7,8,8,8
After 12 days: 5,6,5,3,4,5,6,0,0,1,5,6,7,7,7,8,8 | total: 17 days
*/

const fishLife = (arr, days) => {
  let newArr;
  while( days > 0){
    newArr = []
    for(let num of arr){
      if(num !== 0) {
        newArr.push(num-1)
      } else if (
        num === 0
      ) {
        newArr.push(8)
        newArr.push(6)
      }  
    }
    arr = newArr;
    days--;
  }
  return newArr.length;
}

console.log(fishLife(arr,days))