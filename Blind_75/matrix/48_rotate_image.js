// The time complexity is O(M), where M is the size of the matrix (total of all cells). 
// The space complexity is O(1) because the variables don't grow as M becomes larger.
let matrix = [[1,2,3],[4,5,6],[7,8,9]]

const rotate = function(matrix){
  matrix = matrix.reverse()
  for(let i in matrix)
    for(let j =0; j<i; j++) [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
  return matrix
}

// My Solution without restriction of rotating within matrix

// var rotate = function(matrix) {
//   let arr = [];
//   let column = matrix.length-1;
//   let row = 0
//   let result = [];

//   while( row < matrix[0].length){
      
//      while(column >= 0  ){
//        arr.push(matrix[column][row]) 
//          column--;
//        }    
//       row++;
//       column = matrix.length-1;
//       result.push(arr) 
//       arr =[]
//   }
//   return result;
// };

console.log(rotate(matrix))