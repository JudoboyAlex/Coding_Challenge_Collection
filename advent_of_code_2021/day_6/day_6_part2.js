var fs = require('fs');
var arr = fs.readFileSync('resource.txt').toString().split("").filter(c => c !== ",").map(Number)

const fishLife = (arr) => {
  let map = new Array(9).fill(0);
  for (let i = 0; i < arr.length; i++) {
    const age = arr[i];
    map[age]++;
  }

  for (let day = 0; day < 256; day++) {
    const tmp = new Array(9).fill(0);   
    for (let age = 0; age < map.length; age++) {
      if (age > 0) {
        tmp[age-1] += map[age];
      } else {
        tmp[6] += map[age];
        tmp[8] += map[age];
      }
    }
  
    map = tmp;
  }
  console.log(map)
  return map.reduce((sum, count) => sum + count, 0);
};

console.log(fishLife(arr))