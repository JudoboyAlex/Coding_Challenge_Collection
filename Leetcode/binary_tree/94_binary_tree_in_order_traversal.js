/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
      
  var data = [];
  if(!root) return data;
  function traverse(node){
    if(node.left){
      traverse(node.left)
    }
    data.push(node.val);
    if(node.right){
      traverse(node.right)
    }
  }
  traverse(root)

  return data;

};