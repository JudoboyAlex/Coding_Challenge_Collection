var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  dfs(root);

  return diameter;

  function dfs(node, level) {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    // update diameter at every node
    diameter = Math.max(diameter, left + right);
    console.log("this is " + diameter);
    // update the largest number of edge so far
    return 1 + Math.max(left, right);
  }
};

/*
Complexity Analysis

Let NN be the number of nodes in the tree.

Time complexity: O(N). This is because in our recursion function longestPath, we only enter and exit from each node once. We know this because each node is entered from its parent, and in a tree, nodes only have one parent.

Space complexity: O(N). The space complexity depends on the size of our implicit call stack during our DFS, which relates to the height of the tree. In the worst case, the tree is skewed so the height of the tree is O(N). If the tree is balanced, it'd be O(logN).
*/