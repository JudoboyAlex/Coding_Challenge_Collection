// leetcode solution
var pathSum = function(root, sum) {
    return helper(root, sum, [], []);
};

function helper(root, sum, solution, result) {
    if (!root) { // sanity check
        return result;
    }

    solution.push(root.val); // add current node's value to the solution

    if (!root.left && !root.right && root.val === sum) {
        console.log(solution)
        result.push(solution.slice()); // found a solution
    }

    helper(root.left, sum - root.val, solution, result); // try left subtree
    helper(root.right, sum - root.val, solution, result); // try right subtree
    // console.log(solution)
    solution.pop(); // backtracking
    console.log(solution)
    return result;
}

// grokking solution
const Deque = require('./collections/deque'); //http://www.collectionsjs.com

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


function find_paths(root, sum) {
  allPaths = [];
  find_paths_recursive(root, sum, new Deque(), allPaths);
  return allPaths;
}


function find_paths_recursive(currentNode, sum, currentPath, allPaths) {
  if (currentNode === null) {
    return;
  }

  // add the current node to the path
  currentPath.push(currentNode.val);

  // if the current node is a leaf and its value is equal to sum, save the current path
  if (currentNode.val === sum && currentNode.left === null && currentNode.right === null) {
    allPaths.push(currentPath.toArray());
  } else {
    // traverse the left sub-tree
    find_paths_recursive(currentNode.left, sum - currentNode.val, currentPath, allPaths);
    // traverse the right sub-tree
    find_paths_recursive(currentNode.right, sum - currentNode.val, currentPath, allPaths);
  }
  // remove the current node from the path to backtrack,
  // we need to remove the current node while we are going up the recursive call stack.
  currentPath.pop();
}


const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(4);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
let sum = 23,
  result = find_paths(root, sum);

process.stdout.write(`Tree paths with sum ${sum}: `);
for (i = 0; i < result.length; i++) {
  process.stdout.write(`[${result[i]}] `);
}