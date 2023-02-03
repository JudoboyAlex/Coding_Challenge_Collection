var pathSum = function (root, sum, res = [], path = []) {
  if (root) {
    path.push(root.val);
    if (!root.left && !root.right && sum - root.val === 0) res.push([...path]);
    pathSum(root.left, sum - root.val, res, path);
    pathSum(root.right, sum - root.val, res, path);
    path.pop();
  }
  return res;
};

/*
Complexity Analysis

Time Complexity: O(N2) where N are the number of nodes in a tree. In the worst case, we could have a complete binary tree and if that is the case, then there would be N/2 leafs. For every leaf, we perform a potential O(N) operation of copying over the pathNodes nodes to a new list to be added to the final pathsList. Hence, the complexity in the worst case could be O(N2).

Space Complexity: O(N). The space complexity, like many other problems is debatable here. I personally choose not to consider the space occupied by the output in the space complexity. So, all the new lists that we create for the paths are actually a part of the output and hence, don't count towards the final space complexity. The only additional space that we use is the pathNodes list to keep track of nodes along a branch.
*/
