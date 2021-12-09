var fs = require('fs');
var arr = fs.readFileSync('resource.txt').toString().split("\n").map(String);

const calculatePosition = (arr) => {
  let horizonAxis = 0;
  let depth = 0;
  let aim = 0;

  for(let i = 0; i < arr.length; i++){
    if(arr[i].split(" ")[0] === "forward"){
      horizonAxis += Number(arr[i].split(" ")[1]);
      depth = depth + (aim * Number(arr[i].split(" ")[1]));
    }
    if(arr[i].split(" ")[0] === "up"){
      aim -= Number(arr[i].split(" ")[1]);
    }
    if(arr[i].split(" ")[0] === "down"){
      aim += Number(arr[i].split(" ")[1]);
    }
  }

  return horizonAxis * depth;
}

console.log(calculatePosition(arr))