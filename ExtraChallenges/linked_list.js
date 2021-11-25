let obj1 = {
  game: "overwatch"
};

let obj2 = obj1;

obj2.game = "final fantasy"
// console.log(obj2.game); // final fantasy
// console.log(obj1.game); // final fantasy

// 10-->5-->16-->null

myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
};

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

  printList(){
    const array = [];
    let currentNode  = this.head;
    while(currentNode !== null){
      array.push(currentNode.val);
      currentNode = currentNode.next;
    }
    return array;
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
      prev = node;
      node = next;
    }
    return this;
  }
  // O(N)time, O(N)space
  deleteDuplicate(){
    let hash = {};
    // let map = new Map();
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

  //O(1)space, O(n2)time
  deleteDuplicate_II(){
    let current = this.head;
    while(current != null){
    // Remove all future nodes that have the same value
      let runner = current;
      while(runner.next != null){
        if(runner.next.val === current.val){
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    }
  }

  deleteDuplicate_III(){
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

  // 토끼와 거북이 알고리듬
  // 1 --> 2 --> 3 --> 4 --> 5 --> null
  // 1st iteration
  // 1(current) --> 2 --> 3(hare) --> 4 --> 5 --> null
  // 2nd iteration
  // 1 --> 2(current) --> 3 --> 4(hare) --> 5 --> null
  // 3rd iteration
  // 1 --> 2 --> 3(current) --> 4 --> 5(hare) --> null
  // 4th iteration
  // 1 --> 2 --> 3 --> 4(current) --> 5 --> null(hare)

  removeNthFromEnd(head, n) {
    let hare = head;
    let current = head;
    for(let i = 0; i < n; i++){
        if(hare === null) return null;
        hare = hare.next;
    }
    while(hare != null){
        hare = hare.next;
        current = current.next;
    }
    console.log(current.val)
  };

  isPalindrome(head) {
    if(head == null || head.next == null) return true;
        var slow = head;
        var fast = head;
        while(fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }
        slow.next = this.reverseList(slow.next);
        slow = slow.next;
        while(slow != null) {
            if(head.val != slow.val) return false;
            head = head.next;
            slow = slow.next;
        }
        return true;
  };

  reverseList(head) {
        var pre = null;
        var next = null;
        while(head != null) {
            next = head.next;
            head.next = pre;
            pre = head;
            head = next;
        }
        return pre;
  };
}

var list = new SinglyLinkedList()
list.insertAtEnd("NBA")
list.insertAtEnd("React")
list.insertAtEnd("NBA")
list.insertAtEnd("Angular")
// list.deleteDuplicate()
// list.deleteDuplicate_II()
// list.removeNthFromEnd(list.head, 2)
list.insertAtEnd(1)
list.insertAtEnd(3)
list.insertAtEnd(1)
console.log(list.isPalindrome(list.head))

// console.log(list.printList())
