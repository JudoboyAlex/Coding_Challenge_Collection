// Quick Select
var findKthLargest = function (nums, k) {
  return quickSelect(nums, 0, nums.length - 1, k);
};

function quickSelect(arr, start, end, k) {
  const pivotIndex = partition(arr, start, end);

  if (k < arr.length - pivotIndex) {
    return quickSelect(arr, pivotIndex + 1, end, k);
  } else if (k > arr.length - pivotIndex) {
    return quickSelect(arr, start, pivotIndex - 1, k);
  }

  return arr[pivotIndex];
}

function partition(arr, start, end) {
  const pivot = arr[end];
  let i = start;
  let j = end - 1;

  while (i <= j) {
    while (arr[i] < pivot) {
      i += 1;
    }
    while (arr[j] > pivot) {
      j -= 1;
    }
    if (i <= j) {
      swap(arr, i, j);
      i += 1;
      j -= 1;
    }
  }

  swap(arr, i, end);

  return i;
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

/*
Time complexity : O(N) in the average case, O(N2)in the worst case.
Space complexity : O(1).
*/

// Heap Solution
var findKthLargest = function (nums, k) {
  let maxPriorityQueue = new MaxPriorityQueue();

  // we need to add all elements to our mpq manually time-0(n)
  nums.forEach((num) => maxPriorityQueue.enqueue(num));

  // keep  removing(pop) element from the top
  while (k > 1) {
    maxPriorityQueue.dequeue();
    k--;
  }

  // by default maxPriorityQueue.front() returns an objects {priority:5, element:5}
  // priority will give same result.
  return maxPriorityQueue.front().element;
};

/*
The time complexity of adding an element in a heap of size k is O(log⁡k), and we do it N times that means O(Nlog⁡k) time complexity for the algorithm.

Complexity Analysis

Time complexity : O(Nlog⁡k).
Space complexity : O(k) to store the heap elements.
*/