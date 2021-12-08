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
 * @return {number}
 */
 var maxDepth = function(root) {
    if(!root){
        return 0;
    }

    const leftDepth = maxDepth(root.left) + 1;
    // console.log(leftDepth)
    
    const rightDepth = maxDepth(root.right) + 1;
            
    return leftDepth < rightDepth ? rightDepth : leftDepth;
  };

// Time: O(N), Space: O(log(N))
