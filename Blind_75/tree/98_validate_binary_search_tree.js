var isValidBST = function(root, min=null, max=null) {
  if (!root) return true;
  if (min !== null && root.val <= min.val) return false;
  if (max !== null && root.val >= max.val) return false;
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

// Time: O(N), Space: O(N)