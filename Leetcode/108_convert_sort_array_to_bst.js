/*
Runtime: 84 ms, faster than 95.62% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
Memory Usage: 43.6 MB, less than 16.56% of JavaScript online submissions for Convert Sorted Array to Binary Search Tree.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var sortedArrayToBST = function(nums) {
  if (nums == null || !nums.length) {
      return null;
  }
  
  let mid = Math.floor(nums.length / 2);
  const node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
  return node;
}