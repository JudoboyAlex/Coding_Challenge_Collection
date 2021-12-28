const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

const depthFirstRecursive = (graph, source) => {
  console.log(source);
  for(let neighbor of graph[source]){
    depthFirstRecursive(graph, neighbor);
  }
};

depthFirstRecursive(graph, 'a'); // abdfce