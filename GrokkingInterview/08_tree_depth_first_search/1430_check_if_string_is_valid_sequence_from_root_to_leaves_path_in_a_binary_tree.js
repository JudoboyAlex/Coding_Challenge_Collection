var isValidSequence = function(root, arr) {
    
    function checkSeq(node, i) {
        
        // Mismatch, or unexpected leaf node
        if (node == null || node.val !== arr[i]) {
            return false
        } 
        
        // Last sequence number has been verified
        if (i == arr.length - 1) {
            // Check we are at a leaf node - for valid sequence
            return node.left == null && node.right == null
        }
        
        // Still more sequence numbers to verify, check down left and right nodes
        return checkSeq(node.left, i + 1) || checkSeq(node.right, i + 1)
        
    }
    
    return checkSeq(root, 0)
};

// grokking solution
function find_path(root, sequence) {
  if (root === null) {
    return sequence.length === 0;
  }

  return find_path_recursive(root, sequence, 0);
}

function find_path_recursive(currentNode, sequence, sequenceIndex) {
  if (currentNode === null) {
    return false;
  }

  const seqLen = sequence.length;
  if (sequenceIndex >= seqLen || currentNode.val !== sequence[sequenceIndex]) {
    return false;
  }

  // if the current node is a leaf, add it is the end of the sequence, we have found a path!
  if (
    currentNode.left === null &&
    currentNode.right === null &&
    sequenceIndex === seqLen - 1
  ) {
    return true;
  }

  // recursively call to traverse the left and right sub-tree
  // return true if any of the two recursive call return true
  return (
    find_path_recursive(currentNode.left, sequence, sequenceIndex + 1) ||
    find_path_recursive(currentNode.right, sequence, sequenceIndex + 1)
  );
}

/*
Time complexity#
The time complexity of the above algorithm is O(N), where ‘N’ is the total number of nodes in the tree. 
This is due to the fact that we traverse each node once.

Space complexity#
The space complexity of the above algorithm will be O(N) in the worst case. 
This space will be used to store the recursion stack. 
The worst case will happen when the given tree is a linked list (i.e., every node has only one child).
*/