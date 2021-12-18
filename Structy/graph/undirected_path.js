const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  // Using Set is better than Array because look up takes O(1)
  // Array takes O(N) for look up
  return hasPath(graph, nodeA, nodeB, new Set());
}

const hasPath = (graph, src, dst, visited) => {
  if(src === dst) return true;
  if(visited.has(src)) return false;

  visited.add(src);

  for(let neighbor of graph[src]){
    if(hasPath(graph, neighbor, dst, visited) === true){
      return true;
    }
  }

  return false;
};

const buildGraph = (edges) => {
  const graph = {};

  for(let edge of edges){
    const [a,b] = edge;
    if(!(a in graph)) graph[a] = [];
    if(!(b in graph)) graph[b] = [];    
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
}

const edges = [
  ['i','j'],
  ['k','i'],
  ['m','k'],
  ['k','l'],
  ['o','n']
]

console.log(undirectedPath(edges, 'j', 'm')) // true
/*
buildGraph function converts edges to graph

edges: [
  [i,j],
  [k,i],
  [m,k],
  [k,l],
  [o,n],
]

to

graph: {
  i: [j,k],
  j: [i],
  k: [i]
}

*/
