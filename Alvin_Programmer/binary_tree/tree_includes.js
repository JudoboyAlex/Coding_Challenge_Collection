class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//              a
//            /   \
//          b       c
//        /   \       \
//      d       e       f

// BFS
const treeIncludesBfs = (root, target) => {
  if(!root) return false;

  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    if(current.val === target) return true;
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }

  return false;
};
console.log(treeIncludesBfs(a, "z")); // false
console.log(treeIncludesBfs(a, "e")); // true

// DFS
const treeIncludesDfs = (root, target) => {
  if(!root) return false;
  if(root.val === target) return true;

  return treeIncludesDfs(root.left, target) || treeIncludesDfs(root.right, target);
};

console.log(treeIncludesDfs(a, "z")); // false
console.log(treeIncludesDfs(a, "e")); // true