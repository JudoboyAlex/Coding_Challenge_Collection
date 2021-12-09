var fs = require('fs');
var arr = fs.readFileSync('resource.txt').toString().split("\n").map(Number);

const getData = () => {
  let sum1 = 0;
  let sum2 = 0;
  let counter  = 0;
  for(let i = 0; i < arr.length-3; i ++){
    sum1 = arr[i] + arr[i+1] + arr[i+2]
    sum2 = arr[i+1] + arr[i+2] + arr[i+3]
    if(sum2 > sum1){
      counter++
    }
  }
  return counter;
}

console.log(getData());