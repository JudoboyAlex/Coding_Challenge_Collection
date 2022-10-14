var isSameTree = function (p, q) {
  if (p == null && q == null) return true;
  if (q == null || p == null) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.right, q.right) && isSameTree(p.left, q.left);
};

// Time: O(N) where N is a number of nodes in the tree, 
// since one visits each node exactly once.
// Space: O(N) in the worst case of completely unbalanced tree, to keep a recursion stack.
