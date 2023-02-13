var countComponents = function(n, edges) {
  // create visited array
  let visited = [];
  // create graph
  let graph = buildGraph(n, edges);
  // create res
  let res = 0;
  
  // mark visited with false
  for (let i = 0; i < n; i ++) {
      visited.push(false);
  }
  
  // traverse graph
  for (let i = 0; i < n; i ++) {
      // not visited
      if (visited[i] === false) {
          res ++;
          dfs(i, graph, visited);
      }
  }
  return res;
};

const buildGraph = (n, edges) => {
  let graph = Array.from({length: n}, () => []);
  
  for (let edge of edges) {
      let [src, dist] = edge;
      graph[src].push(dist);
      graph[dist].push(src);
  }
  console.log(graph)
  return graph
}

const dfs = (index, graph, visited) => {
  visited[index] = true;
  let nodes = graph[index];
  for (let i = 0; i < nodes.length; i ++) {
      if (visited[nodes[i]] === false) {
          dfs(nodes[i], graph, visited)
      }
  }
}

// Easier to understand solution
var countComponents = function (n, edges) {
  let adjList = {};
  let count = 0;
  let visited = {};

  for (let i = 0; i < n; i++) {
    adjList[i] = [];
  }

  for (edge of edges) {
    let [a, b] = edge;
    adjList[a].push(b);
    adjList[b].push(a);
  }

  for (let node in adjList) {
    if (dfs(adjList, node, visited) === true) {
      count += 1;
    }
  }
  return count;
};

const dfs = (adjList, current, visited) => {
  if (visited[current]) return false;

  visited[current] = true;

  for (let neighbor of adjList[current]) {
    dfs(adjList, neighbor, visited);
  }

  return true;
};

// Time complexity: O(E+V)
// Space complexity: O(E+V)

// DFS Solution
var countComponents = function (n, edges) {
  const visited = new Set();
  let count = 0;

  // build adjacency list
  const adj = {};
  for (let i = 0; i < n; i++) {
    adj[i] = [];
  }
  for (const [n1, n2] of edges) {
    adj[n1].push(n2.toString());
    adj[n2].push(n1.toString());
  }

  // dfs, keep track of visited nodes in set
  function dfs(val) {
    if (visited.has(val)) return;
    visited.add(val);
    for (const i of adj[val]) {
      dfs(i);
    }
  }
  console.log(adj);
  // perform dfs on each node (not visited), since some may be islands
  for (const val in adj) {
    if (!visited.has(val)) {
      dfs(val);
      count++;
    }
  }

  return count;
};

/*
Complexity Analysis

Here E = Number of edges, V = Number of vertices.

Time complexity: O(E+V).

Building the adjacency list will take O(E) operations, as we iterate over the list of edges once, and insert each edge into two lists.

During the DFS traversal, each vertex will only be visited once. This is because we mark each vertex as visited as soon as we see it, and then we only visit vertices that are not marked as visited. In addition, when we iterate over the edge list of each vertex, we look at each edge once. This has a total cost of O(E+V).

Space complexity: O(E+V).

Building the adjacency list will take O(E) space. To keep track of visited vertices, an array of size O(V) is required. Also, the run-time stack for DFS will use O(V) space.
*/