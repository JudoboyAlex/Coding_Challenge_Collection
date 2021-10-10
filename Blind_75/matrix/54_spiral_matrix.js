var spiralOrder = function(matrix) {
  let result = []
        
  if (matrix.length == 0) {
      return result;
  }
  
  let rowBegin = 0;
  let rowEnd = matrix.length-1;
  let colBegin = 0;
  let colEnd = matrix[0].length - 1;
  
  while (rowBegin <= rowEnd && colBegin <= colEnd) {
      // Traverse Right
      for (let j = colBegin; j <= colEnd; j++) {
          result.push(matrix[rowBegin][j]);
      }
      rowBegin++;
      
      // Traverse Down
      for (let j = rowBegin; j <= rowEnd; j++) {
          result.push(matrix[j][colEnd]);
      } 
      colEnd--;
      
      if (rowBegin <= rowEnd) {
          // Traverse Left
          for (let j = colEnd; j >= colBegin; j--) {
              result.push(matrix[rowEnd][j]);
          }
      }
      rowEnd--;
      
      if (colBegin <= colEnd) {
          // Traver Up
          for (let j = rowEnd; j >= rowBegin; j --) {
              result.push(matrix[j][colBegin]);
          }
      }
      colBegin ++;
  }
  
  return result;
}



console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))

// Expected output: [1,2,3,6,9,8,7,4,5]