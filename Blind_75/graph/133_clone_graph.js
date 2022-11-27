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

/*
Complexity Analysis

Time Complexity: O(N+M), where N is a number of nodes (vertices) and M is a number of edges.
Space Complexity: O(N). This space is occupied by the visited hash map and in addition to that, space would also be occupied by the recursion stack since we are adopting a recursive approach here. The space occupied by the recursion stack would be equal to O(H) where H is the height of the graph. Overall, the space complexity would be O(N).
*/

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

// Solution with comment
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

var cloneGraph = function(node, copy = new Map()) {
    // Handle null case
    if (!node) return null;
        
    // If our graph hasn't already copied the input node
    if (!copy.has(node.val)) {
        // Create new copy node (+ reference in map)
        copy.set(node.val, new Node(node.val));
        // Recursively clone neighbors
        copy.get(node.val).neighbors = node.neighbors.map((neighbor) => cloneGraph(neighbor, copy));
    }
        
    // Return copied/new node (* not * the original node passed in)
    return copy.get(node.val);
};

