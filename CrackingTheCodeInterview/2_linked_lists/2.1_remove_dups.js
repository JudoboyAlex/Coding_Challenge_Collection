class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  insertAtEnd(val){
    let newHead = new Node(val)
    if(this.head == null){
      this.head = newHead;
      this.tail = this.head;
    } else {
      this.tail.next = newHead;
      this.tail = newHead
    }
    this.size++;
  }

  insertAtBeginning(val){
    let newHead = new Node(val)
    if(!this.head){
      this.head = newHead;
      this.tail = this.head;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }
    this.size++;
    return this;
  }

  insertAtindex(idx, value){
    if(idx < 0 || idx > this.size){
      return false;
    }
    if(idx === this.size){
      insertAtEnd(value)
    }
    if(idx === 0){
      insertAtBeginning(value)
    }
    let previousValue = this.getValueAtIndex(idx-1);
    let newNode = new Node(value);
    let temp = previousValue.next
    previousValue.next = newNode;
    newNode.next = temp
    this.size++;  
    return true;
  }

  removeAtIndex(idx){
    if(idx < 0 || idx > this.size){
      return undefined;
    }
    if(idx === this.size-1){
      this.removeAtEnd()
    }
    if(idx === 0){
      this.removeAtBeginning()
    }
    let prev = this.getValueAtIndex(idx-1)
    let removed = prev.next.val
    prev.next = prev.next.next
    this.size--;
    return removed;
  }

  removeAtEnd(){
    if(!this.head){
      return null;
    }
    var current = this.head;
    var newTail = current;
    while(current.next){
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.size--;
    if(this.size === 0){
      this.head = null;
      this.tail = null;
    }
    // console.log(this.head)
    return current;
  }

  removeAtBeginning(){
    if(!this.head){
      return undefined;
    }
    let temp = this.head;
    this.head = this.head.next;
    this.size--;
    return temp;
  }

  getValueAtIndex(idx){
    if(idx < 0 || idx >= this.size){
      return null;
    }
    let count = 0;
    var current = this.head;
    while(count < idx ){
      current = current.next;
      count++;
    }
    return current;
  }

  updateValueAtIndex(idx, value){
    let returnedValue = this.getValueAtIndex(idx, value)
    if(returnedValue){
      returnedValue.val = value;
      return true;
    }
    return false;
  }

  traverse(){
    var current = this.head;
    while(current){
      console.log(current.val);
      current = current.next;
    }
    return current.val;
  }

  reverseLinkedList(){
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for(let i = 0; i < this.size; i++){
      next = node.next;
      node.next = prev;
      console.log(node)
      prev = node;
      node = next;
      console.log(node)
    }
    return this;
  }

  deleteDuplicate(){
    let hash = {};
    let current = this.head;
    let prev = null;
    while(current){
      let currentValue = current.val;
      // If current value is seen before
      if (hash[currentValue]) {
            prev.next = current.next;
            this.size--;
      } else {
          hash[currentValue] = true;
          prev = current;
      }
      current = current.next; 
    }
    this.tail = prev
  }

  // Follow up: How would you solve this problem is a temporary buffer is not allowed?
  // a solution that doesn't use O(n) space
  deleteDuplicate_II(){
    var p1;
    var p2;
    var p3;
    var val;
    p2 = this.head;

    while (p2) {
      val = p2.val;
      p1 = p2;
      p3 = p1.next;

      while (p3) {
        if (p3.val === val) {
            p1.next = p3.next;
            this.size--;
        } else {
          p1 = p3;
        }
        p3 = p3.next;
      }

      p2 = p2.next;
    }
  }
  
}
//   tail                         head
//   hello ---> alexander ---> the great

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("Alexander!")

// console.log(first)

var list = new SinglyLinkedList()
// list.insertAtEnd("Hello")
// list.insertAtEnd("Alexander")
// list.insertAtEnd("Yang")
list.insertAtEnd("Hello")
list.insertAtEnd("Alexander")
list.insertAtEnd("Hello")
list.insertAtEnd("The Great")
// list.deleteDuplicate()
list.deleteDuplicate_II()
// list.removeAtEnd()
// list.traverse()
console.log(list)
