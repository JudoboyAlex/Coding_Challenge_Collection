var moveZeroes = function (nums) {
  let c = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      [nums[i], nums[c]] = [nums[c], nums[i]];
      c++;
    }
  }
  return nums;
};

// Time: O(n), Space: O(1)