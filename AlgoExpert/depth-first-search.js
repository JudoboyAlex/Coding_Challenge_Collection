// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }
	
	// O(v+e) time and O(v) space
  depthFirstSearch(array) {
    // Write your code here.
		array.push(this.name);
		for(const child of this.children){
			child.depthFirstSearch(array);
		}
		return array;
  }
}

// Do not edit the line below.
exports.Node = Node;
