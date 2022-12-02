var orangesRotting = function (grid) {
  const rows = grid.length,
    cols = grid[0].length,
    UpDown = [1, -1, 0, 0],
    LeftRight = [0, 0, 1, -1];
  let queueRotten = [],
    minute = 0,
    fresh = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === 2) queueRotten.push([r, c]);
      else if (grid[r][c] === 1) fresh++;
    }
  }

  while (fresh && queueRotten.length) {
    const next = [];
    minute++;

    for (let [r, c] of queueRotten) {
      for (let i = 0; i < 4; i++) {
        const x = r + UpDown[i],
          y = c + LeftRight[i];

        if (x < rows && x >= 0 && y < cols && y >= 0 && grid[x][y] === 1) {
          fresh--;
          grid[x][y] = 2;
          next.push([x, y]);
        }
      }
    }
    queueRotten = next;
  }
  return fresh > 0 ? -1 : minute;
};

/*
Complexity Analysis

Time Complexity: O(NM), where N×M is the size of the grid.

First, we scan the grid to find the initial values for the queue, which would take O(NM) time.

Then we run the BFS process on the queue, which in the worst case would enumerate all the cells in the grid once and only once. Therefore, it takes O(NM) time.

Thus combining the above two steps, the overall time complexity would be O(NM)+O(NM)=O(NM)

Space Complexity: O(NM), where NN is the size of the grid.

In the worst case, the grid is filled with rotten oranges. As a result, the queue would be initialized with all the cells in the grid.

By the way, normally for BFS, the main space complexity lies in the process rather than the initialization. For instance, for a BFS traversal in a tree, at any given moment, the queue would hold no more than 2 levels of tree nodes. Therefore, the space complexity of BFS traversal in a tree would depend on the width of the input tree.
*/