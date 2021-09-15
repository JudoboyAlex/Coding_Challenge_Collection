function binary_search(arr, key) {
  let start = 0;
  end = arr.length - 1;
  isAscending = arr[start] < arr[end];
  while (start <= end) {
    // calculate the middle of the current range
    mid = Math.floor(start + (end - start) / 2);

    if (key === arr[mid]) {
      return mid;
    }
    if (isAscending) { // ascending order
      if (key < arr[mid]) {
        end = mid - 1; // the 'key' can be in the first half
      } else { // key > arr[mid]
        start = mid + 1; // the 'key' can be in the second half
      }
    } else { // descending order
      if (key > arr[mid]) {
        end = mid - 1; // the 'key' can be in the first half
      } else { // key < arr[mid]
        start = mid + 1; // the 'key' can be in the second half
      }
    }
  }

  return -1; // element not found
}


console.log(binary_search([4, 6, 10], 10));
console.log(binary_search([1, 2, 3, 4, 5, 6, 7], 5));
console.log(binary_search([10, 6, 4], 10));
console.log(binary_search([10, 6, 4], 4));

// Time complexity ##
// Since, we are reducing the search range by half at every step, 
// this means that the time complexity of our algorithm will be O(logN) 
// where ‘N’ is the total elements in the given array.

// Space complexity ##
// The algorithm runs in constant space O(1).