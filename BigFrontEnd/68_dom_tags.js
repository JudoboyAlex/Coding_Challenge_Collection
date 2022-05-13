// BFS using Queue
function getTags(tree) {
  let tags = [];
  let queue = [tree];

  while (queue.length > 0) {
    let node = queue.shift();
    let node_name = node.tagName.toLowerCase();
    if (!tags.includes(node_name)) tags.push(node_name);
    for (let child of node.children) {
      queue.push(child);
    }
  }
  return tags;
}

// DFS Recursion
function getTags(tree) {
  const tagSet = new Set();

  function dfs(root) {
    if (!root) {
      return;
    }

    tagSet.add(root.tagName.toLowerCase());

    for (const child of root.children) {
      dfs(child);
    }
  }

  dfs(tree);
  return Array.from(tagSet);
}

// DFS Recursion without inner function
function getTags(tree, res = []) {
  // your code here
  if (!tree) {
    return;
  }
  res.push(tree.tagName.toLowerCase());
  for (let i = 0; i < tree.children.length; i++) {
    getTags(tree.children[i], res);
  }
  return [...new Set(res)];
}