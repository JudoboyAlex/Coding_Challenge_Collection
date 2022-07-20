/*
Prompt
Given a 2D rectangular matrix, return all of the values in a single, linear array in spiral order. Start at (0, 0) and first include everything in the first row. Then down the last column, back the last row (in reverse), and finally up the first column before turning right and continuing into the interior of the matrix.
 
For example:
 1  2  3  4
 5  6  7  8
 9 10 11 12
 13 14 15 16
Returns:
[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]
function spiralTraversal(matrix) {
  // your code here 
}
*/
function spiralTraversal(matrix) {
  // Deal with an edge case of no rows (0x0) matrix.
  if (matrix.length === 0) return [];

  const output = [];

  // All limit indices are inclusive.
  // Initialize row start and end indices.
  let rstart = 0,
    rend = matrix.length - 1;
  // Initialize column start and end indices.
  let cstart = 0,
    cend = matrix[0].length - 1;

  // I'll use 0 as across, 1 as down, 2 as across (backward)
  // and 3 as up.
  let direction = 0;

  // While there is any work left to do in any direction, row
  // or column.
  while (rstart <= rend && cstart <= cend) {
    // Use a different loop based on direction.
    switch (direction) {
      case 0: // across left to right
        for (let i = cstart; i <= cend; i++) {
          output.push(matrix[rstart][i]);
        }
        rstart++;
        break;
      case 1: // down
        for (let i = rstart; i <= rend; i++) {
          output.push(matrix[i][cend]);
        }
        cend--;
        break;
      case 2: // across right to left
        for (let i = cend; i >= cstart; i--) {
          output.push(matrix[rend][i]);
        }
        rend--;
        break;
      case 3: // up
        for (let i = rend; i >= rstart; i--) {
          output.push(matrix[i][cstart]);
        }
        cstart++;
        break;
    }

    // Move to the next direction and wrap around
    // if we just did up and need to move back to across.
    direction = (direction + 1) % 4;
  }

  return output;
}