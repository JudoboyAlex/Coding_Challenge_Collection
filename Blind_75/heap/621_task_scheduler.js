// Math Solution
var leastInterval = function (tasks, n) {
  // the map will be our tracking mechanism
  let map = new Map();

  // the max occurrences
  let maxNumberOfOccurrence = 0;

  // the number of tasks that has the max occurrences
  let maxNumberOfTaskWithMaxOccurrence = 0;

  for (let task of tasks) {
    let taskOccurrence = map.has(task) ? map.get(task) + 1 : 1;
    map.set(task, taskOccurrence);
    if (taskOccurrence > maxNumberOfOccurrence) {
      maxNumberOfOccurrence = taskOccurrence;
      maxNumberOfTaskWithMaxOccurrence = 1;
    } else if (taskOccurrence === maxNumberOfOccurrence) {
      maxNumberOfTaskWithMaxOccurrence++;
    }
  }
  // our formula, handle the edge case
  return Math.max(
    tasks.length,
    (maxNumberOfOccurrence - 1) * (n + 1) + maxNumberOfTaskWithMaxOccurrence
  );
};

/*
Complexity Analysis

Time Complexity: O(N total), where N total is a number of tasks to execute. This time is needed to iterate over the input array tasks and to compute the array frequencies. Array frequencies contains 26 elements, and hence all operations with it takes constant time.

Space Complexity: O(1), to keep the array frequencies of 26 elements.
*/

// Max Heap Solution
var leastInterval = function (tasks, n) {
  let hashMap = new Map();
  for (let task of tasks) {
    hashMap.set(task, hashMap.get(task) + 1 || 1);
  }

  let maxHeap = new MaxHeap();
  for (let [key, value] of hashMap.entries()) {
    maxHeap.offer(value);
  }

  let queue = [];
  let time = 0;
  while (maxHeap.array.length || queue.length) {
    let task = maxHeap.array.length ? maxHeap.poll() : null;

    if (task) {
      task--;
      time++;
      if (task !== 0) queue.push([task, time + n]);
    } else {
      time++;
    }

    if (queue.length && queue[0][1] <= time) {
      let temp = queue.shift();
      maxHeap.offer(temp[0]);
    }
  }

  return time;
};

class MaxHeap {
  constructor() {
    this.array = [];
  }

  offer(val) {
    this.array.push(val);
    this.bubbleUp(this.array.length - 1);
  }

  bubbleUp(index) {
    while (index > 0) {
      let parent = Math.floor((index - 1) / 2);
      if (this.array[index] > this.array[parent]) {
        this.swap(index, parent);
      }
      index = parent;
    }
    return null;
  }

  poll() {
    this.swap(0, this.array.length - 1);
    let result = this.array.pop();
    this.bubbleDown(0);
    return result;
  }

  bubbleDown(parent) {
    while (true) {
      let left = parent * 2 + 1;
      let right = parent * 2 + 2;
      if (
        (this.array[parent] < this.array[left] && !this.array[right]) ||
        this.array[left] > this.array[right]
      ) {
        this.swap(parent, left);
        parent = left;
      } else if (this.array[parent] < this.array[right]) {
        this.swap(parent, right);
        parent = right;
      } else {
        parent = left;
      }
      if (!this.array[parent]) break;
    }
    return null;
  }

  swap(index1, index2) {
    let temp = this.array[index1];
    this.array[index1] = this.array[index2];
    this.array[index2] = temp;
    return null;
  }
}