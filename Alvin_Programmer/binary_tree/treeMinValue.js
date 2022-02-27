class Node{
    constructor(val){
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }
  
  const a = new Node(5);
  const b = new Node(7);
  const c = new Node(9);
  const d = new Node(2);
  const e = new Node(6);
  const f = new Node(8);
  
  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;
  c.right = f;
  
  //              5
  //            /   \
  //          7       9
  //        /   \       \
  //      2       6       8

const treeMinValue = (root) => {
    if (root === null) return Infinity;
    const smallestLeftValue = treeMinValue(root.left);
    const smallestRightValue = treeMinValue(root.right);
    return Math.min(root.val, smallestLeftValue, smallestRightValue);
};