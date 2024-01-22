var goodNodes = function(root) {
    let good = 0;
    function trav(node, max){
        if(!node) return;
        if(node.val >= max) ++good;
        max = Math.max(max, node.val);
        trav(node.left, max);
        trav(node.right, max); 
    }
    trav(root, root.val);
    return good;
    
};

/*
Complexity Analysis

Given N as the number of nodes in the tree,

Time complexity: O(N)

With DFS we visit every node exactly once and do a constant amount of work each time.

Space complexity: O(N)

Because DFS prioritizes depth, our call stack can be as large as the height H of the tree. In the worst case scenario, H=NH = NH=N, if the tree only has one path.
*/