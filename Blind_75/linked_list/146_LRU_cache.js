// Solution#1
class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
  }

  get(key) {
    if (!this.cache.has(key)) return -1;

    const v = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, v);
    return this.cache.get(key);
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    this.cache.set(key, value);
    if (this.cache.size > this.capacity) {
      this.cache.delete(this.cache.keys().next().value); // keys().next().value returns first item's key
    }
  }
}

/*
Complexity Analysis

Time complexity : O(1) both for put and get since all operations with ordered dictionary : get/in/set/move_to_end/popitem (get/containsKey/put/remove) are done in a constant time.

Space complexity : O(capacity) since the space is used only for an ordered dictionary with at most capacity + 1 elements.
*/

//Solution#2 - Using Linked List
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(key, val) {
    const newNode = new Node(key, val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return newNode;
  }

  remove(node) {
    if (!node.next && !node.prev) {
      // if there's only 1 node
      this.head = null;
      this.tail = null;
    } else if (!node.next) {
      // if the node is tail node
      this.tail = node.prev;
      this.tail.next = null;
    } else if (!node.prev) {
      // if the node is head node
      this.head = node.next;
      this.head.prev = null;
    } else {
      // if the node is in between
      const prev = node.prev;
      const next = node.next;
      prev.next = next;
      next.prev = prev;
    }
    this.length--;
  }
}

class LRUCache {
  constructor(capacity) {
    this.DLL = new DoublyLinkedList();
    this.map = {};
    this.capacity = capacity;
  }

  get(key) {
    if (!this.map[key]) return -1;
    const value = this.map[key].val;
    this.DLL.remove(this.map[key]);
    this.map[key] = this.DLL.push(key, value);
    return value;
  }

  put(key, value) {
    if (this.map[key]) this.DLL.remove(this.map[key]);
    this.map[key] = this.DLL.push(key, value);
    if (this.DLL.length > this.capacity) {
      const currKey = this.DLL.head.key;
      delete this.map[currKey];
      this.DLL.remove(this.DLL.head);
    }
  }
}