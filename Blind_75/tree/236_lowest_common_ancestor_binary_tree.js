const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root;
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (!left) return right; // p and q are in the right subtree
  if (!right) return left; // p and q are in the left subtree
  return root; // p is in one side and q is in the other
};

/*
Complexity Analysis

Time Complexity: O(N), where N is the number of nodes in the binary tree. In the worst case we might be visiting all the nodes of the binary tree.

Space Complexity: O(N). This is because the maximum amount of space utilized by the recursion stack would be NN since the height of a skewed binary tree could be N.
*/