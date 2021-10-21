/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */

// Optimum Solution
 var cloneGraph = function (graph) {
  var map = {};

  function traverse(node) {
    if (!node) return node;
    if (!map[node.val]) {
      map[node.val] = new Node(node.val);
      map[node.val].neighbors = node.neighbors.map((neighbor) => traverse(neighbor));
    }
    return map[node.val];
  }
    
    return traverse(graph);
};

// BFS
var cloneGraph = function(node) {
  if(!node){
      return null
  }
  
  const visited = new Map();
  const queue = [node];
  visited.set(node, new Node(node.val));
  
  while(queue.length > 0){
      const current = queue.shift();
      for(let n of current.neighbors){
          if(!visited.has(n)){ 
              visited.set(n, new Node(n.val));
              queue.push(n);
          }
          visited.get(current).neighbors.push(visited.get(n))
      }
  }
  return visited.get(node);
};

// DFS
var cloneGraph = function(node, map = new Map()) {
  if(!node) return null
  if(map.has(node)) return map.get(node)
  const copy = new Node(node.val)
  map.set(node, copy)
  for(let k of node.neighbors){    
    copy.neighbors.push(cloneGraph(k, map))
  }
  return copy
};

