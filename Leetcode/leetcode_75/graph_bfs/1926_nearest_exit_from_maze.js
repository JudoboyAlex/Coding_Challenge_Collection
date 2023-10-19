// BFS Solution
const nearestExit = (maze, [y0, x0]) => {
  maze[y0][x0] = "@";
  const queue = [[y0, x0, 0]];
  while (queue.length) {
    const [y, x, step] = queue.shift();
    for (const [dy, dx] of [
      [-1, 0],
      [0, -1],
      [1, 0],
      [0, 1],
    ]) {
      const ny = y + dy,
        nx = x + dx;
      if (!maze[ny] || !maze[ny][nx]) {
        if (step) return step;
      } else if (maze[ny][nx] === ".") {
        queue.push([ny, nx, step + 1]);
        maze[ny][nx] = "*";
      }
    }
  }
  return -1;
};

/*
Complexity Analysis
Let m,n be the size of the input matrix maze.

Time complexity: O(m⋅n)

For each visited cell, we add it to queue and pop it from queue once, which takes constant time as the operation on queue requires O(1)time.
For each cell in queue, we mark it as visited in maze, and check if it has any unvisited neighbors in all four directions. This also takes constant time.
In the worst-case scenario, we may have to visit O(m⋅n) cells before the iteration stops.
To sum up, the overall time complexity is O(m⋅n).
Space complexity: O(max(m,n))

We modify the input matrix maze in-place to mark each visited cell, it requires constant space.
We use a queue queue to store the cells to be visited. In the worst-case scenario, there may be O(m+n) cells stored in queue.
The space complexity is O(m+n)+O(max(m,n)).
*/
