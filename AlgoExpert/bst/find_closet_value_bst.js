//Average: O(log(n)) time and O(1) space
//Worst: O(n) time and O(1) space
function findClosestValueInBst(tree, target) {
  // Write your code here.
	return findClosestValueInBstHelper(tree,target, tree.value);
}

function findClosestValueInBstHelper(tree,target,closest){
	let currentNode = tree;
	while(currentNode !== null){
		
		if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
			closest = currentNode.value;
		}
		if(target < currentNode.value){
			currentNode = currentNode.left;
		} else if ( target > currentNode.value){
			currentNode = currentNode.right;
		} else {
			break;
		}
	}
	return closest;
}

class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Solution Using Recursion 
//Average: O(log(n)) time and O(log(n)) space
//Worst: O(n) time and O(n) space
function findClosestValueInBst(tree, target) {
  // Write your code here.
	function findClosestValueInBstHelper(tree,target,closest){
		if(tree === null) return closest;
		if(Math.abs(target -closest) > Math.abs(targete-tree.value)){
			closest = tree.value;
		}
		if(target < tree.value){
			return findClosestValueInBstHelper(tree.left, target, closest);
		} else if( target > tree.value){
			return findClosestValueInBstHelper(tree.right, target,closest);
		} else {
			return closest;
		}
	}
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
