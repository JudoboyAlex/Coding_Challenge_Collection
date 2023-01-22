var sortColors = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let current = left;

  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

  while (current <= right) {
    if (nums[current] === 0) {
      swap(left, current);
      left++;
      current++;
    } else if (nums[current] === 2) {
      swap(right, current);
      right--;
    } else {
      current++;
    }
  }
};
/*
Complexity Analysis

Time complexity : O(N) since it's one pass along the array of length N.

Space complexity : O(1) since it's a constant space solution.
*/