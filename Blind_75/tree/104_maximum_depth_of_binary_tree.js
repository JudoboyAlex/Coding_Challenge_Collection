// DFS
var maxDepth = function(root) {
    if(!root){
        return 0;
    }

    const leftDepth = maxDepth(root.left) + 1;
    
    const rightDepth = maxDepth(root.right) + 1;
            
    return leftDepth < rightDepth ? rightDepth : leftDepth;
};

// Time complexity: O(n)

// BFS 
var maxDepth = function (root) {
  if (!root) return 0;
  const queue = [root];
  let depth = 0;
  while (queue.length !== 0) {
    depth++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      if (queue[i].left) queue.push(queue[i].left);
      if (queue[i].right) queue.push(queue[i].right);
    }
    queue.splice(0, len);
  }
  return depth;
};