var exist = function(matrix, word) {
  var wordLength = word.length,
      i,
      j;
  
  word = word.split("");
  
  var verify = function(row, col, matrix, path){
      if(row < 0 || col < 0 || row >= matrix.length || col >= matrix[0].length || matrix[row][col] != word[path] || path > wordLength)
          return false;
      // Up to this point, we found the char we were looking for
      path++;
      matrix[row][col] = '#';
      
      //If we find the word
      if(path === wordLength)
          return true;
      //Up
      if(verify(row - 1, col, matrix, path))
          return true;
      //Right
      if(verify(row, col + 1, matrix, path))
          return true;
      //Down
      if(verify(row + 1, col, matrix, path))
          return true;
      //Left
      if(verify(row, col - 1, matrix, path))
          return true;
      // Backtrack
      matrix[row][col] = word[--path];
      return false;
  };
  
  for(i = 0; i < matrix.length; i++){
      for(j = 0; j < matrix[i].length; j++){
          if(verify(i, j, matrix, 0))
              return true;
      }
  }
  
  return false;
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]
let word = "ABCCED"
console.log(exist(board, word))

// Another solution
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let result = false;
    var check = function(r, c, i) {
        if (!result) {
            if (r < 0 || c < 0 || r >= board.length || c >= board[0].length) return; // out of boundary
            if (board[r][c] != word[i]) return; // wrong character
            if (i == word.length - 1) { // got to the end means we found a correct path
                result = true;
                return;
            }
            board[r][c] = null; // mark our path so we dont go back and forth
			// try all directions
            check(r+1,c,i+1)
            check(r-1,c,i+1)
            check(r,c+1,i+1)
            check(r,c-1,i+1)
            board[r][c] = word[i] // reset our board , very important
        }
    }

    for (let i=0;i<board.length;i++) {
        for (let j=0;j<board[0].length;j++) {
            if (board[i][j] == word[0]) {
                check(i, j, 0)
                if (result) return result;
            }
        }
    }
    
    return result;
};