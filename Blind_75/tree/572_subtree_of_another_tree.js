var isSubtree = function(s, t) {
  if (!s) return false;
  return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isEqual(root1, root2) {
  if (!root1 || !root2) return !root1 && !root2;
  if (root1.val !== root2.val) return false;
  return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
}

// Input: root = [3,4,5,1,2], subRoot = [4,1,2]
// Output: true

// O(N*M) where N is the size of tree and M is the size of subtree 
// (we're iterating over a subtree for each node in the main tree)