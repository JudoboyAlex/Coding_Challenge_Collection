const maxPathSum = (root) => {
  let max = -Infinity;

  const findSums = (node) => {
    // Base case / hit a null
    if (!node) return 0;

    let left = findSums(node.left),
      right = findSums(node.right),
      allSum = left + right + node.val,
      leftNodeSum = left + node.val,
      rightNodeSum = right + node.val;

    // Max is all possible combinations
    max = Math.max(max, node.val, allSum, leftNodeSum, rightNodeSum);

    // Return the MAX path, which can be node.val, left + node.val, or right + node.val
    return Math.max(leftNodeSum, rightNodeSum, node.val);
  };

  findSums(root);

  return max;
};

/*
Time complexity: O(N), where N is number of nodes, 
since we visit each node not more than 2 times.

Space complexity: O(H), where H is a tree height, 
to keep the recursion stack. In the average case of balanced tree, 
the tree height H = log N, in the worst case of skewed tree, H = N.
*/