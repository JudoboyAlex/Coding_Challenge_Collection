/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 function buildTree(preorder, inorder) {
   
  function build(left, right) {
      if (left > right) {
          return null;
      }

      var root = preorder.shift();
      var mid = inorder.indexOf(root);
      var root = new TreeNode(root);

      root.left = build(left, mid - 1);
      root.right = build(mid + 1, right);

      return root;
  }
  return build(0, inorder.length - 1);
}

console.log(buildTree([3,9,20,15,7],[9,3,15,20,7])); // [3,9,20,null,null,15,7]