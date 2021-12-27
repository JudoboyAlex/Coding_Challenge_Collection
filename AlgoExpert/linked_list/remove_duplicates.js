// My Solution
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	let arr = [];
	while(linkedList != null){
		arr.push(linkedList.value)
		linkedList = linkedList.next
	}
	// remove duplicates
	arr = [...new Set(arr)];
	
  return createLinkedList(arr);
}

// converts array to linked list
//We have to develop
/*
LinkedList = {
    val:1,
    next:{
        val:2,
        next: {
            val:3,
            next: {
                val:4,
                next:null
            }
        }
    }
}
*/
function createLinkedList(array){
    let node, temp;
    for(let i = array.length - 1; i >= 0; i--){
        if(!node)
            node = new LinkedList(array[i]);
        else {
            temp = new LinkedList(array[i]);
            temp.next = node;
            node = temp;
        }
    }
    return node;
}


// AlgoExpert Solution
// O(n) time | O(1) space where n is the number of nodes in linked list
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  // Write your code here.
	let currentNode = linkedList;
	while(currentNode !== null){
		let nextDistinctNode = currentNode.next;
		while(nextDistinctNode !== null && nextDistinctNode.value === currentNode.value){
			nextDistinctNode = nextDistinctNode.next;
		}
		
		currentNode.next = nextDistinctNode;
		currentNode = nextDistinctNode;
	}
  return linkedList;
}