// Iterative
var searchBST = function(root, val) {
    while( root != null && val != root.val){
        root = val < root.val ? root.left : root.right;
    }
    return root;
};

/*
Time: O(N)
Space: O(1)
*/

// Recursion
var searchBST = function(root, val) {
  if( root === null || val === root.val) return root;
  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val)
};

/*
Time: O(N)
Space: O(N)
*/