class TreeNode{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

let root = new TreeNode()

let tree = {
  val : 4,
  left : {
    val : 2,
    left : {
      val : 1,
      left : null,
      right : null
    },
    right :  {
      val : 3,
      left : null,
      right : null
    }
  },
  right : {
    val : 7,
    left : {
      val : 6,
      left : null,
      right : null
    },
    right : {
      val : 9,
      left : null,
      right : null
    }
  }
}

// Recursion
function invertTree(root) {
  if (root == null) return root;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}

// DFS
function invertTree(root) {
  const stack = [root];

  while (stack.length > 0) {
    const n = stack.pop();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      stack.push(n.left, n.right);
    }
  }

  return root;
}

// BFS
function invertTree(root) {
  const queue = [root];

  while (queue.length > 0) {
    const n = queue.shift();
    if (n != null) {
      [n.left, n.right] = [n.right, n.left];
      queue.push(n.left, n.right);
    }
  }

  return root;
}


console.log(invertTree(tree))