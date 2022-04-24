var twoSum = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right > left) {
    let sum = nums[left] + nums[right];

    if (target > sum) {
      left++;
    } else if (target < sum) {
      right--;
    } else if (target === sum) {
      return [left + 1, right + 1];
    }
  }

  return [-1, -1];
};

/*
Complexity Analysis

Time complexity: O(n). The input array is traversed at most once. Thus the time complexity is O(n).

Space complexity: O(1). We only use additional space to store two indices and the sum, 
so the space complexity is O(1).
*/