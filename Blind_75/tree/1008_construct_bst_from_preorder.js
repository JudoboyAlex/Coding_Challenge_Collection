function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
}


var bstFromPreorder = function(preorder) {
  if (!preorder.length) return null
  
  const [root, ...rest] = preorder
  
  const rootNode = new TreeNode(root)
  rootNode.left = bstFromPreorder(rest.filter(n => n < root))
  rootNode.right = bstFromPreorder(rest.filter(n => n > root))
  
  return rootNode
};

// Input: preorder = [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

console.log(bstFromPreorder([8,5,1,7,10,12]))