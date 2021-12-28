const graph = {
  a: ['b', 'c'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: []
}

const depthFirstIterative = ( graph, resource) => {
  const stack = [source];

  while(stack.length > 0){
    const current = stack.pop();
    console.log(current);

    for(let neighbor of graph[current]){
      stack.push(neighbor);
    }
  }
};

depthFirstIterative(graph, 'a') // abdfce