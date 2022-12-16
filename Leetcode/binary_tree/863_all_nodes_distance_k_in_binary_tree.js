var distanceK = function (root, target, K) {
  if (!root) return [];
  const newRoot = mapParents(root, null, target); // maps the parent with each node and captures target as the center/new root.

  return findKDistApart(newRoot, K, []); // do bfs to find k dist nodes apart
};

const mapParents = (node, par, target) => {
  if (!node) return null;

  node.parent = par; // for each node map its parent.

  if (node == target) return target; //  return the target

  return (
    mapParents(node.left, node, target) || mapParents(node.right, node, target)
  ); // go map both dir. when target found return that.
};

const findKDistApart = (node, K, res) => {
  if (!node || node.visited)
    // if none or already visited.
    return res;
  if (K == 0) {
    res.push(node.val); // dist reached. add in result array and send back
    return res;
  }

  node.visited = true; // mark as visited.

  findKDistApart(node.left, K - 1, res); // go left
  findKDistApart(node.right, K - 1, res); // go right
  findKDistApart(node.parent, K - 1, res); // go parent direction

  return res;
};

// Time: O(n), Space: O(n)