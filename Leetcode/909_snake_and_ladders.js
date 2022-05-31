const positionToRowCol = (pos, n) => {
  let row = Math.floor((pos - 1) / n);
  let col = Math.floor((pos - 1) % n);
  col = row % 2 === 1 ? n - col - 1 : col;
  row = n - row - 1;
  return [row, col];
};

var snakesAndLadders = function (board) {
  const N = board.length;
  const queue = [1];
  const dist = new Array();
  dist[1] = 0;
  let currPos;
  while (queue.length > 0) {
    currPos = queue.shift();
    for (let i = 1; i <= 6; i++) {
      const [row, col] = positionToRowCol(currPos + i, N);
      const boardNum = board[row][col];
      const pos = boardNum < 0 ? currPos + i : boardNum;
      if (pos === N * N) {
        return dist[currPos] + 1;
      }
      if (typeof dist[pos] === "undefined") {
        dist[pos] = dist[currPos] + 1;
        queue.push(pos);
      }
    }
  }
  return -1;
};
