var maxDepth = function(root) {
    if(!root){
        return 0;
    }

    const leftDepth = maxDepth(root.left) + 1;
    
    const rightDepth = maxDepth(root.right) + 1;
            
    return leftDepth < rightDepth ? rightDepth : leftDepth;
};

// Time complexity: O(n)