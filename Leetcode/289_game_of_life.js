let gameOfLife = (board) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let liveCells = aliveNeighbors(board, i, j);
      if (board[i][j] === 1 && (liveCells < 2 || liveCells > 3)) {
        board[i][j] = 2;
      }
      if (board[i][j] === 0 && liveCells === 3) {
        board[i][j] = 3;
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      board[i][j] %= 2;
    }
  }
};

let aliveNeighbors = (board, i, j) => {
  let count = 0;
  let indexes = [
    [1, -1],
    [1, 0],
    [1, 1],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  for (let index of indexes) {
    if (
      index[0] + i < 0 ||
      index[0] + i > board.length - 1 ||
      index[1] + j < 0 ||
      index[1] + j > board[0].length - 1
    )
      continue;
    if (
      board[index[0] + i][index[1] + j] === 1 ||
      board[index[0] + i][index[1] + j] === 2
    )
      count++;
  }
  return count;
};

/*
Complexity Analysis

Time Complexity: O(M×N), where M is the number of rows and N is the number of columns of the Board.

Space Complexity: O(1)
*/

// Cleaner Solution
var gameOfLife2 = function (board) {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let cell = board[i][j];
      let neighbors = getNeighbors(i, j, board);
      // cell went from 0 to 1
      if (cell == 0 && neighbors == 3) {
        board[i][j] = 2;
      }
      // cell went from 1 to 0
      if (cell == 1 && (neighbors < 2 || neighbors > 3)) {
        board[i][j] = -1;
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == -1) board[i][j] = 0;
      if (board[i][j] == 2) board[i][j] = 1;
    }
  }
};

var getNeighbors = function (r, c, board) {
  let radius = [-1, 0, +1],
    count = 0;
  for (let i = 0; i < radius.length; i++) {
    for (let j = 0; j < radius.length; j++) {
      console.log(r + radius[i]);
      if (!(radius[i] == 0 && radius[j] == 0) && board[r + radius[i]] != null) {
        let neighbor = board[r + radius[i]][c + radius[j]];
        if (Math.abs(neighbor) == 1) count += 1;
      }
    }
  }
  return count;
};