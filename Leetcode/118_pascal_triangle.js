/*
Runtime: 72 ms, faster than 89.84% of JavaScript online submissions for Pascal's Triangle.
Memory Usage: 38.1 MB, less than 95.18% of JavaScript online submissions for Pascal's Triangle.
*/
var generate = function(numRows) {
  const pascalsTriangles = [];
  if(numRows === 0) {
     return pascalsTriangles;
  }
  
  pascalsTriangles.push([1]);
  let last = [];
  while(pascalsTriangles.length < numRows) {
      let newEntry = [];
      newEntry[0] = 1;

      for(let i=0; i < last.length -1; i++) {
          newEntry[i+1] = last[i] + last[i+1];
      }

      newEntry.push(1);
      pascalsTriangles.push(newEntry);
      last  = newEntry;
  }
  return pascalsTriangles;
};

console.log(generate(5))

// [
//   [1],
//  [1,1],
// [1,2,1],
// [1,3,3,1],
// [1,4,6,4,1]
// ]