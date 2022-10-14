var isBalanced = function (root) {
  function getHeight(node) {
    if (node === null) return 0;
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  }

  if (root === null) return true;
  return (
    isBalanced(root.left) &&
    isBalanced(root.right) &&
    Math.abs(getHeight(root.left) - getHeight(root.right)) < 2
  );
};

// Time: O(n log n)
// Space: O(n)