var isValidSudoku = function (board) {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];
      //   console.log(cell);
      if (cell === ".") continue;
      const boxNum = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      const row = `row: ${i}, value ${cell}`;
      const col = `col: ${j}, value ${cell}`;
      const box = `box: ${boxNum}, value ${cell}`;
      if (set.has(row) || set.has(col) || set.has(box)) return false;
      set.add(row);
      set.add(col);
      set.add(box);
    }
  }
  return true;
};

/*
Complexity Analysis

Let N be the board length, which is 9 in this question. Note that since the value of N is fixed, the time and space complexity of this algorithm can be interpreted as O(1). However, to better compare each of the presented approaches, we will treat NNN as an arbitrary value in the complexity analysis below.

Time complexity: O(N^2)
 because we need to traverse every position in the board, and each of the four check steps is an   
 O(1) operation.

Space complexity: O(N^2) 
 because in the worst-case scenario, if the board is full, we need a hash set each with size N to store all seen numbers for each of the N rows, N columns, and N boxes, respectively.
*/