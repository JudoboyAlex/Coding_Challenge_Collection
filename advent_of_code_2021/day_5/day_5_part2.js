var fs = require('fs');
var arr = fs.readFileSync('resource.txt').toString()
                                         .split("\n").map((row) => row.split(" -> "))
                                         .map(([from, to]) => [
                                           from.split(",").map(Number),
                                           to.split(",").map(Number)
                                         ])
//console.log(arr)

function findOverlap(arr) {
  const map = {};
  let overlapCount = 0;

  for (let i = 0; i < arr.length; i++) {
    const [start, end] = arr[i];
    const [x1, y1] = start;
    const [x2, y2] = end;

    const horizontal = (x1 === x2);
    const vertical = (y1 === y2);

    if (horizontal) {
      let minY = Math.min(y1, y2);
      let maxY = Math.max(y1, y2);
      for (let y = minY; y <= maxY; y++) {
        if (!map[[x1, y]]) map[[x1, y]] = 1;
        else {
          map[[x1, y]]++;
          if (map[[x1, y]] === 2) overlapCount++;
        }
      }
    } else if (vertical) {
      let minX = Math.min(x1, x2);
      let maxX = Math.max(x1, x2);
      for (let x = minX; x <= maxX; x++) {
        if (!map[[x, y1]]) map[[x, y1]] = 1;
        else {
          map[[x, y1]]++;
          if (map[[x, y1]] === 2) overlapCount++;
        }
      }
    } else {
      let x = x1;
      let y = y1;
  
      if (!map[[x, y]]) map[[x, y]] = 1;
      else {
        map[[x, y]]++;
        if (map[[x, y]] === 2) overlapCount++;
      }
  
      while (x !== x2 && y !== y2) {
        if (x > x2) x--
        if (x < x2 ) x++;
        if (y > y2) y--
        if (y < y2 ) y++;
        
        if (!map[[x, y]]) map[[x, y]] = 1;
        else {
          map[[x, y]]++;
          if (map[[x, y]] === 2) overlapCount++;
        }
      }
    }
  }

  return overlapCount;
};

console.log(findOverlap(arr))

/*
.......1..
..1....1..
..1....1..
.......1..
.112111211
..........
..........
..........
..........
222111....
*/