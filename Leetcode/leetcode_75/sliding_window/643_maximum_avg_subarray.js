var findMaxAverage = function (nums, k) {
  let currSum = 0;
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];

    if (i >= k - 1) {
      maxSum = Math.max(currSum, maxSum);
      currSum -= nums[i - (k - 1)];
    }
  }

  return maxSum / k;
};

/*
Complexity Analysis

Time complexity : O(n). We iterate over the given nums array of length n once only.

Space complexity : O(1). Constant extra space is used.
*/