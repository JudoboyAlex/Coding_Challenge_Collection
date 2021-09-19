const Heap = require('./collections/heap'); //http://www.collectionsjs.com


class MedianOfAStream {
  constructor() {
    this.maxHeap = new Heap([], null, ((a, b) => a - b)); // containing first half of numbers
    this.minHeap = new Heap([], null, ((a, b) => b - a)); // containing second half of numbers
  }

  insert_num(num) {
    if (this.maxHeap.length === 0 || this.maxHeap.peek() >= num) {
      this.maxHeap.push(num);
    } else {
      this.minHeap.push(num);
    }

    // either both the heaps will have equal number of elements or max-heap will have one
    // more element than the min-heap
    if (this.maxHeap.length > this.minHeap.length + 1) {
      this.minHeap.push(this.maxHeap.pop());
    } else if (this.maxHeap.length < this.minHeap.length) {
      this.maxHeap.push(this.minHeap.pop());
    }
  }

  find_median() {
    if (this.maxHeap.length === this.minHeap.length) {
      // we have even number of elements, take the average of middle two elements
      return this.maxHeap.peek() / 2.0 + this.minHeap.peek() / 2.0;
    }

    // because max-heap will have one more element than the min-heap
    return this.maxHeap.peek();
  }
}


const medianOfAStream = new MedianOfAStream();
medianOfAStream.insert_num(3);
medianOfAStream.insert_num(1);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(5);
console.log(`The median is: ${medianOfAStream.find_median()}`);
medianOfAStream.insert_num(4);
console.log(`The median is: ${medianOfAStream.find_median()}`);

// Time complexity#
// The time complexity of the insertNum() will be O(logN)O(logN) due to the insertion in the heap. 
// The time complexity of the findMedian() will be O(1)O(1) as we can find the median from the top elements of the heaps.

// Space complexity#
// The space complexity will be O(N)O(N) because, as at any time, we will be storing all the numbers.