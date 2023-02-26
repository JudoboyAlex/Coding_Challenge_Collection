// Binary Search Solution
var findMin = function (nums) {
  var left = 0,
    right = nums.length - 1;

  while (left < right) {
    var mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) left = mid + 1;
    else right = mid;
  }
  return nums[left];
};

/*
Complexity Analysis

Time Complexity : Same as Binary Search O(logN)
Space Complexity : O(1)
*/