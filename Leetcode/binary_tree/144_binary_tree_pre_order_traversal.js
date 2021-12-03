var preorderTraversal = function(root) {
    
  var data = [];
  if(!root) return data;
  
  function traverse(node){
    data.push(node.val);
    if(node.left){
      traverse(node.left)
    }
    if(node.right){
      traverse(node.right)
    }
  }
  traverse(root)
  return data;

};

// Iterative Solution
var preorderTraversal = function(root) {
  if (!root) return [];
  var result = [];
  var stack = [root];
  
  while(stack.length) {
    var node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};