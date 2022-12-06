var levelOrder = function(root) {
  if (!root) {
      return [];
  }
  const stack = [];
  stack.push(root);
  const result = [];
  while (stack.length > 0) {
      const size = stack.length;
      const temp = [];
      for (let i = 0; i < size; i++) {
          const node = stack.shift();
          temp.push(node.val);
          if (node.left) {
              stack.push(node.left);
          }
          if (node.right) {
              stack.push(node.right);
          }
      }
      result.push(temp);
  }
  return result;
};

// BFS Solution
var levelOrder = function (root) {
  if (!root) return [];
  let queue = [root];
  let result = [];

  while (queue.length !== 0) {
    let arr = [];
    const queueLength = queue.length;

    for (let i = 0; i < queueLength; i++) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
      arr.push(current.val);
    }

    result.push(arr);
  }
  return result;
};

/*
Complexity Analysis

Time complexity : O(N) since each node is processed exactly once.

Space complexity : O(N) to keep the output structure which contains N node values.
*/