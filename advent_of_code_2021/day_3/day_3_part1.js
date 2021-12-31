var fs = require('fs');
var arr = fs.readFileSync('resource.txt').toString().split("\n");
let array = [];

function helper(pos,val){
  if(array[pos] === undefined){
    array[pos] = {countZero: 0, countOne: 0};
  }

  if(val === "1")array[pos].countOne++;
  if(val === "0")array[pos].countZero++;
}

const findEpsilon = (arr) => {
  for(let nums of arr){
    for(let i = 0; i < nums.length; i++){
      helper(i, nums[i])
    }
  }
  let finalOne = []
  let finalZero = []

  for(let n of array){
    if(n.countOne> n.countZero){
      finalOne.push("1")
      finalZero.push("0")
    } else {
      finalOne.push("0")
      finalZero.push("1")
    }
  }

  return parseInt(finalOne.join(""),2) * parseInt(finalZero.join(""),2)
}


console.log(findEpsilon(arr))