var setZeroes = function (matrix) {
  let colZero = false,
    rows = matrix.length,
    cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] == 0) {
      colZero = true;
    }
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 1; j--) {
      if (matrix[i][0] == 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }

    if (colZero == true) {
      matrix[i][0] = 0;
    }
  }

  return matrix;
};

// Simplest Solution
var setZeroes = function (matrix) {
  let rowZeroes = new Set();
  let colZeroes = new Set();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rowZeroes.add(i);
        colZeroes.add(j);
      }
    }
  }

  for (let row of rowZeroes) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  }

  for (let col of colZeroes) {
    for (let j = 0; j < matrix.length; j++) {
      matrix[j][col] = 0;
    }
  }
};
console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
);
// console.log(
//   setZeroes([
//     [0, 1, 2, 0],
//     [3, 4, 5, 2],
//     [1, 3, 1, 5],
//   ])
// );

// Complexity Analysis

// Time Complexity : O(M \times N)O(M×N)
// Space Complexity : O(1)O(1)
