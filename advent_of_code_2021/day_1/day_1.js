var fs = require('fs');
var arr = fs.readFileSync('resource.txt').toString().split("\n").map(Number);

const getData = () => {
  let counter = 0;
  for(let i = 0; i < arr.length-1; i++){
    if(arr[i] < arr[i+1]){
      counter += 1;
    }
  }
  return counter;
}

console.log(getData());