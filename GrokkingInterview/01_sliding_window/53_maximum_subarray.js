// Given an array of positive numbers and a positive number ‘k,’ 
// find the maximum sum of any contiguous subarray of size ‘k’.

// grokking solution
function max_sub_array_of_size_k(k, arr) {
    let maxSum = 0,
      windowSum = 0,
      windowStart = 0;
  
    for (window_end = 0; window_end < arr.length; window_end++) {
      windowSum += arr[window_end]; // add the next element
      // slide the window, we don't need to slide if we've not hit the required window size of 'k'
      if (window_end >= k - 1) {
        maxSum = Math.max(maxSum, windowSum);
        windowSum -= arr[windowStart]; // subtract the element going out
        windowStart += 1; // slide the window ahead
      }
    }
    return maxSum;
  }

// leetcode solution - different problem
var maxSubArray = function (nums) {
  let max = nums[0];
  let current = 0;

  for (let num of nums) {
    current = Math.max(num, current + num);
    max = Math.max(max, current);
  }

  return max;
};
  
  console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])}`); // 9
  console.log(`Maximum sum of a subarray of size K: ${max_sub_array_of_size_k(2, [2, 3, 4, 1, 5])}`); // 7

  console.log(`Maximum sum of a subarray of size K: ${maxSubArray([2, 1, 5, 1, 3, 2])}`); // 14
  console.log(`Maximum sum of a subarray of size K: ${maxSubArray([2, 3, 4, 1, 5])}`); // 15
