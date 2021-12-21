/**
 * @param {number[][]} isConnected
 * @return {number}
 */
 function findCircleNum(M) {
  // visited hash
  const visited = {};
  // friend circles count
  let circles = 0;

  // iterate thru matrix
  for (let i = 0; i < M.length; i++) {
      // check if this friend has been visited before
      if (!visited[i]) {
          // start dfs for this friend
          dfs(i);
          // this is another friend circle
          circles++;
      }
  }

  return circles;

  // helper method to do dfs traversal thru M
  function dfs(i) {
      // go thru this friend's friends
      for (let j = 0; j < M.length; j++) {
          // check if this is a friend, and not visited before
          if (M[i][j] === 1 && !visited[j]) {
              // add as visited
              visited[j] = true;
              // call dfs
              dfs(j);
          }
      }
  }
}

console.log(findCircleNum([[1,1,0],[1,1,0],[0,0,1]]));
console.log(findCircleNum([[1,0,0],[0,1,0],[0,0,1]]));