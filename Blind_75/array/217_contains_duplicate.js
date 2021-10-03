var containsDuplicate = function(nums) {
  return nums.length !== [...new Set(nums)].length
};

// Time complexity: O(n) 