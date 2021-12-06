/*
Runtime: 84 ms, faster than 91.66% of JavaScript online submissions for Symmetric Tree.
Memory Usage: 40.2 MB, less than 90.11% of JavaScript online submissions for Symmetric Tree.
*/

var isSymmetric = function (root) {
  return root == null || isSymmetricHelp(root.left, root.right);
};

var isSymmetricHelp = function (left, right) {
  if (left == null || right == null) return left == right;
  if (left.val != right.val) return false;
  return (
    isSymmetricHelp(left.left, right.right) &&
    isSymmetricHelp(left.right, right.left)
  );
};

// Time: O(N), Space: O(N)