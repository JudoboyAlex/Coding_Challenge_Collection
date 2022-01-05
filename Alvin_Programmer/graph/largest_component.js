let graph = {
  0 : [8,1,5],
  1 : [0],
  5 : [0,8],
  8 : [0,5],
  2 : [3,4],
  3 : [2,4],
  4 : [3,2]
}
// This one doesn't work properly. Fails test
const largestComponent = (graph) => {
  const visited = new Set();
  let longest = 0;
  for(let node in graph){
    const size = exploreSize(graph, node, visited);
    if(size > longest) longest = size;
  }
  return longest;
}

const exploreSize = (graph, node, visited) => {
  if(visited.has(node)) return 0;

  visited.add(node);

  let size = 1;
  for(let neighbor of graph[node]){
    size += exploreSize(graph, neighbor, visited);
  }

  return size;
}

console.log(largestComponent(graph))

// My Solution
let count = 0;
const largestComponent = (graph) => {
  const visited = {};
  let arr = []
  for(let node in graph){
    if(explore(graph, node, visited) === true){
      arr.push(count)
      count=0;
    }
  }
  return Math.max(...arr);
};

const explore = (graph, current, visited) => {
  if(visited[current]) return false;
  visited[current] = true;
  count++
  for(let neighbor of graph[current]){
    explore(graph, neighbor, visited)
  }

  return true;
}