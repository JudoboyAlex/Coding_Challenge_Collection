// https://leetcode.com/problems/redundant-connection/description/
// 684. Redundant Connection
var findRedundantConnection = function (edges) {
  let graph = {};
  for (let [e, v] of edges) {
    if (find(e) === find(v)) {
      return [e, v];
    } else {
      union(e, v);
    }
  }

  function union(a, b) {
    graph[find(a)] = graph[find(b)];
  }

  function find(x) {
    if (!graph[x]) graph[x] = x;
    if (graph[x] === x) return x;
    return find(graph[x]);
  }
};