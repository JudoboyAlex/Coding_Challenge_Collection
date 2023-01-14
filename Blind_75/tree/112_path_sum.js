var hasPathSum = function (root, sum) {
  if (!root) return false;

  if (!root.left && !root.right) {
    // check leaf
    return sum === root.val;
  } else {
    // continue DFS
    return (
      hasPathSum(root.left, sum - root.val) ||
      hasPathSum(root.right, sum - root.val)
    );
  }
};

/*
Complexity Analysis

Time complexity : we visit each node exactly once, thus the time complexity is O(N), where N is the number of nodes.

Space complexity : in the worst case, the tree is completely unbalanced, e.g. each node has only one child node, the recursion call would occur N times (the height of the tree), therefore the storage to keep the call stack would be O(N). But in the best case (the tree is completely balanced), the height of the tree would be log⁡(N). Therefore, the space complexity in this case would be O(log⁡(N)).
*/