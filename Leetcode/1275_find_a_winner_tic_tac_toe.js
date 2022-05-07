var tictactoe = function (moves) {
  const arr = new Array(9).fill(null);
  const winCases = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const len = moves.length;
  for (let i = 0; i < len; i++) {
    const move = moves[i];
    arr[move[0] * 3 + move[1]] = i % 2 ? "B" : "A";
    console.log(arr);
  }
  for (let win of winCases) {
    const user = arr[win[0]];
    if (user && user === arr[win[1]] && user === arr[win[2]]) return user;
  }
  return len === 9 ? "Draw" : "Pending";
};

/*
Complexity Analysis

Let n be the length of the board and m be the length of input moves.

Time complexity: O(m⋅n)

For every move, we need to traverse the same row, column, diagonal, and anti-diagonal, 
which takes O(n) time.

Space complexity: O(n^2)


We use an n by n array to record every move.
*/