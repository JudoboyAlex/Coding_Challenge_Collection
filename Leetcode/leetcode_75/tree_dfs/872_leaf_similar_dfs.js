var leafSimilar = function (root1, root2) {
  let leaf1 = [];
  let leaf2 = [];

  let dfs = function (node, leaf) {
    if (!node) return;
    if (!node.left && !node.right) {
      leaf.push(node.val);
    }
    dfs(node.left, leaf);
    dfs(node.right, leaf);
  };

  dfs(root1, leaf1);
  dfs(root2, leaf2);
  // return leaf1.join('_') == leaf2.join('_')
  return leaf1.every((v, i) => v === leaf2[i]);
};

/*
Complexity Analysis

Time Complexity: O(T1+T2) where T1 and T2 are the lengths of the given trees.

Space Complexity: O(T1+T2) the space used in storing the leaf values.
*/