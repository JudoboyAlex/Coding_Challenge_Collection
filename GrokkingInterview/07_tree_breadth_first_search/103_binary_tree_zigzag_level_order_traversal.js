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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  const queue = [root];
  const levels = [];
  let count = 1;

  while (queue.length !== 0) {
    const queueLength = queue.length;
    const currLevel = [];

    for (let i = 0; i < queueLength; i++) {
      // Get next node
      const current = queue.shift();

      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }

      currLevel.push(current.val);
    }
    if (count % 2 === 0) currLevel.reverse();
    count++;
    levels.push(currLevel);
  }
  return levels;
};

/*
Time complexity#
The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes 
in the tree. This is due to the fact that we traverse each node once.

Space complexity#
The space complexity of the above algorithm will be O(N) as we need to return a list 
containing the level order traversal. We will also need O(N) space for the queue. 
Since we can have a maximum of N/2 nodes at any level (this could happen only at the lowest level), 
therefore we will need O(N) space to store them in the queue.
*/