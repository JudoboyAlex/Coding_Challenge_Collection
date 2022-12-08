var lowestCommonAncestor = function (p, q) {
  let nodeA = p;
  let nodeB = q;

  while (nodeA !== nodeB) {
    nodeA = nodeA === null ? q : nodeA.parent;
    nodeB = nodeB === null ? p : nodeB.parent;
  }
  console.log(nodeA === null);
  return nodeA;
};

// Time: O(n), Space: O(1)
