// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

var isSameTree = function(p, q) {
  // p and q are both null
  if (p == null && q == null) return true;
  // one of p and q is null
  if (q == null || p == null) return false;
  if (p.val != q.val) return false;
  return isSameTree(p.right, q.right) &&
          isSameTree(p.left, q.left);
  
};


// Time complexity : \mathcal{O}(N)O(N), where N is a number of nodes in the tree, 
// since one visits each node exactly once.

// Space complexity : \mathcal{O}(\log(N))O(log(N)) in the best case of completely balanced tree 
// and \mathcal{O}(N)O(N) in the worst case of completely unbalanced tree, to keep a recursion stack.