var fs = require("fs");
var arr = fs
  .readFileSync("resource.txt")
  .toString()
  .split("\n")

  function calculatePoints(arr){
    let hash ={
        "AX" : 4,
        "AY" : 8,
        "AZ" : 3,
        "BX" : 1,
        "BY" : 5,
        "BZ" : 9,
        "CX" : 7,
        "CY" : 2,
        "CZ" : 6
    }

    for(let i = 0; i < arr.length; i++){
        arr[i] = hash[arr[i]]
    }
    return arr.reduce((a,b) => a+b)
  }
  console.log(calculatePoints(arr));