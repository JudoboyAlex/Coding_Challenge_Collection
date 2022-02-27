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

function treeSumBFS(root){
    if(!root) return 0;
    let totalSum = 0;
    let queue = [root];
    while(queue.length > 0){
        let current = queue.shift();
        totalSum += current.val;
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }
    return totalSum;
}

function treeSumDFS(root){
    if(!root) return 0;
    let result = [];

    function dfs(root){
        if(!root) return 0;
        result.push(root.val);
        if(root.left)dfs(root.left);
        if(root.right)dfs(root.right);
    }

    dfs(root)

    return result.reduce((accu, curr) => accu + curr)
}

function treeSumRecursion(root){
    if(!root) return 0;

    return root.val + treeSumRecursion(root.left) + treeSumRecursion(root.right)
}