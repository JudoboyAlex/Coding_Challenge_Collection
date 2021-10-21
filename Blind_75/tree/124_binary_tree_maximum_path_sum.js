var maxPathSum = function(root) {
  var max = -Infinity // Initialize to a very small number to handle a path of negative values
  
  function getMaxSum(tree) {
    if (tree == null) { return 0 } // Termination condition
    
    const leftBranch = Math.max(0, getMaxSum(tree.left)) // calculate the root to leaf sum where root is the left node
    const rightBranch = Math.max(0, getMaxSum(tree.right)) // calculate the root to leaf sum where root is the right node
    const currentPath = leftBranch + tree.val + rightBranch  // Sum the path: left -> root -> right (leaf to leaf)
    
    max = Math.max(max, currentPath) // if the current path is greater than the previous value of `max`, update `max` to the current path sum
    return tree.val + Math.max(leftBranch, rightBranch)
  }

  getMaxSum(root) // Call our recursive fn to start the program
  
  return max // Once we have popped out of our recursive calls, `max` contains our maximum path sum

};

