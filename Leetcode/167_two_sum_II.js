/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

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

// Time: O(n)
// Space: O(1)