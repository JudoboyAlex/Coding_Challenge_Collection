var fs = require("fs");
var arr = fs
  .readFileSync("resource.txt")
  .toString()
  .split("\n\n")
  .map((group) => {
    return group
      .split("\n")
      .map((group) => Number(group))
      .reduce((total, calories) => total + calories);
  })
  .sort((a, b) => b - a);

console.log(arr[0]);

console.log(arr[0] + arr[1] + arr[2]);