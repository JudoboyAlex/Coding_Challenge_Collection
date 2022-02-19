function validTree(n, edges) {
  /** construct adjacency list **/
  const adjacencyList = {};
  for (let i = 0; i < n; i++) {
    adjacencyList[i] = [];
  }
  // undirected graph must store edges both ways
  for (let edge of edges) {
    // const u = edge[0];
    // const v = edge[1];
    const [u, v] = edge;
    adjacencyList[u].push(v);
    adjacencyList[v].push(u);
  }

  // Check if there are cycles
  var visited = new Set();
  function dfs(i, prev) {
    if (visited.has(i)) return false;

    visited.add(i);
    for (j of adjacencyList[i]) {
      if (j == prev) continue;
      if (!dfs(j, i)) return false;
    }
    return true;
  }
  console.log(visited.size);
  return dfs(0, -1) && n === visited.size;
}
