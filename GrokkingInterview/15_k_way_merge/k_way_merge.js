const Heap = require('./collections/heap'); //http://www.collectionsjs.com

class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function merge_lists(lists) {
  const minHeap = new Heap([], null, ((a, b) => b.value - a.value));

  // put the root of each list in the min heap
  lists.forEach((a) => {
    if (a !== null) {
      minHeap.push(a);
    }
  });

  // take the smallest(top) element form the min-heap and add it to the result
  // if the top element has a next element add it to the heap
  let resultHead = null,
    resultTail = null;
  while (minHeap.length > 0) {
    const node = minHeap.pop();
    if (resultHead === null) {
      resultHead = resultTail = node;
    } else {
      resultTail.next = node;
      resultTail = resultTail.next;
    }
    if (node.next !== null) {
      minHeap.push(node.next);
    }
  }

  return resultHead;
}

const l1 = new ListNode(2);
l1.next = new ListNode(6);
l1.next.next = new ListNode(8);

const l2 = new ListNode(3);
l2.next = new ListNode(6);
l2.next.next = new ListNode(7);

const l3 = new ListNode(1);
l3.next = new ListNode(3);
l3.next.next = new ListNode(4);

let result = merge_lists([l1, l2, l3]);
process.stdout.write('Here are the elements form the merged list: ');
while (result !== null) {
  process.stdout.write(`${result.value} `);
  result = result.next;
}

// Time complexity #
// Since we’ll be going through all the elements of all arrays and will be removing/adding one element to the heap 
// in each step, the time complexity of the above algorithm will be O(N*logK),O(N∗logK), 
// where ‘N’ is the total number of elements in all the ‘K’ input arrays.

// Space complexity #
// The space complexity will be O(K)O(K) because, at any time, our min-heap will be storing one number from 
// all the ‘K’ input arrays.

// JavaScript don't have built in Heap function, therefore required to code it manually.
// Source --> https://dandkim.com/js-heap-implementation/#minheapify
function minHeapify (array, index) {
  const temp = array[index]
  let childIndex

  for (; index * 2 < array.length; index = childIndex) {
    childIndex = index * 2

    // Choose the smaller of the two (left, right) children
    if (childIndex != array.length - 1 && array[childIndex] > array[childIndex + 1]) {
      childIndex ++
    }

    if (temp > array[childIndex]) {
      array[index] = array[childIndex]
    } else {
      break
    }
  }

  array[index] = temp
}