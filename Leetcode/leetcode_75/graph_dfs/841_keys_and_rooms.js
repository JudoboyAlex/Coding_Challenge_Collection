/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
// Graph DFS
var canVisitAllRooms = function (rooms) {
  let visited = new Set();
  visited.add(0);
  let total = 0;

  dfs(rooms[0]);

  function dfs(current) {
    current.forEach((node) => {
      if (!visited.has(node)) {
        visited.add(node);
        total++;
        dfs(rooms[node]);
      }
    });
  }

  return total == rooms.length - 1 ? true : false;
};

// BFS
var canVisitAllRooms = function (rooms) {
  let arr = new Array(rooms.length).fill(false);

  let queue = [rooms[0]];
  arr[0] = true;
  while (queue.length > 0) {
    let v = queue.pop();
    for (let i = 0; i < v.length; i++) {
      if (v[i] == 0 || arr[v[i]]) continue;
      arr[v[i]] = true;
      queue.push(rooms[v[i]]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == false) return false;
  }
  return true;
};
/*
Complexity Analysis

Time Complexity: O(N+E), where N is the number of rooms, and E is the total number of keys.

Space Complexity: O(N) in additional space complexity, to store stack and seen.
*/
