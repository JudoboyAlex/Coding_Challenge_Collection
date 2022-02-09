var isValidBST = function(root, min=null, max=null) {
  if (!root) return true;
  if (min !== null && root.val <= min.val) return false;
  if (max !== null && root.val >= max.val) return false;
  return isValidBST(root.left, min, root) && isValidBST(root.right, root, max);
};

// Time: O(N), Space: O(N)

// easy to understand solution using inorder traversal
var isValidBST = function (root) {
  let arr = [];
  var traverse = function (root) {
    if (!root) return;
    traverse(root.left);
    arr.push(root.val);
    traverse(root.right);
  };

  traverse(root);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] >= arr[i + 1]) return false;
  }

  return true;
};