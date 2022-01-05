// Used DFS inorder traversal to print out numbers in ascending order
var kthSmallest = function(root, k) {
  let arr = []
 function traverse(root){          
     if(root.left) traverse(root.left)
     arr.push(root.val)  
     if(root.right) traverse(root.right)
 }
 traverse(root)
 return arr[k-1]
};

// Time complexity: O(N)
// Space complexity: O(N)