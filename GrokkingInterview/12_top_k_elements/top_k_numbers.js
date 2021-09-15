const Heap = require('./collections/heap'); //http://www.collectionsjs.com


function find_k_largest_numbers(nums, k) {
  const minHeap = new Heap([], null, ((a, b) => b - a));
  // put first 'K' numbers in the min heap
  for (i = 0; i < k; i++) {
    minHeap.push(nums[i]);
  }

  // go through the remaining numbers of the array, if the number from the array is bigger than the
  // top(i.e., smallest) number of the min-heap, remove the top number from heap and add the number from array
  for (i = k; i < nums.length; i++) {
    if (nums[i] > minHeap.peek()) {
      minHeap.pop();
      minHeap.push(nums[i]);
    }
  }

  // the heap has the top 'K' numbers, return them in a list
  return minHeap.toArray();
}


console.log(`Here are the top K numbers: ${find_k_largest_numbers([3, 1, 5, 12, 2, 11], 3)}`);
console.log(`Here are the top K numbers: ${find_k_largest_numbers([5, 12, 11, -1, 12], 3)}`);

// Time complexity#
// As discussed above, the time complexity of this algorithm is O(K*logK+(N-K)*logK)O(K∗logK+(N−K)∗logK), 
// which is asymptotically equal to O(N*logK)O(N∗logK)

// Space complexity#
// The space complexity will be O(K)O(K) since we need to store the top ‘K’ numbers in the heap.