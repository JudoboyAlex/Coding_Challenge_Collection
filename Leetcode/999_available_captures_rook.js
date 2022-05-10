const numRookCaptures = (board) => {
  let x, y;
  let ret = 0;
  for (let i = 0; i < 8; ++i) {
    for (let j = 0; j < 8; ++j) {
      if (board[i][j] === "R") {
        x = i;
        y = j;
      }
    }
  }
  for (let i = x + 1; i < 8; ++i) {
    if (board[i][y] === "B") break;
    if (board[i][y] === "p") {
      ++ret;
      break;
    }
  }
  for (let i = x - 1; i >= 0; --i) {
    if (board[i][y] === "B") break;
    if (board[i][y] === "p") {
      ++ret;
      break;
    }
  }
  for (let i = y + 1; i < 8; ++i) {
    if (board[x][i] === "B") break;
    if (board[x][i] === "p") {
      ++ret;
      break;
    }
  }
  for (let i = y - 1; i >= 0; --i) {
    if (board[x][i] === "B") break;
    if (board[x][i] === "p") {
      ++ret;
      break;
    }
  }
  return ret;
};
