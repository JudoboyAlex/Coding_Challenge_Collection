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