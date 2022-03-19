var pathSum = function (root, sum) {
  if (!root) return 0;
  return (
    pathSumOnlyStart(root, sum) +
    pathSum(root.left, sum) +
    pathSum(root.right, sum)
  );
};

const pathSumOnlyStart = (root, sum) => {
  if (!root) return 0;
  const self = root.val === sum ? 1 : 0;
  return (
    self +
    pathSumOnlyStart(root.left, sum - root.val) +
    pathSumOnlyStart(root.right, sum - root.val)
  );
};
/*
Time complexity: O(N)2, where NN is a number of nodes. 
During preorder traversal, each node is visited once.

Space complexity: up to O(N) to keep the hashmap of prefix sums, where NN is a number of nodes.
*/