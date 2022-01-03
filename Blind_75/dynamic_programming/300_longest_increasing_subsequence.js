// Dynamic Programming Solution
// Time complexity: O(N^2) | Space complexity: O(N)
function lengthOfLIS(nums) {
  if (!nums.length) return 0;

  let arr = new Array(nums.length).fill(1);
	
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) arr[i] = Math.max(arr[i], arr[j] + 1);
    }
  }
  
  return Math.max(...arr);
}

// Binary Search Solution
// Time complexity: O(N⋅log(N)) | Space complexity: O(N)
var lengthOfLIS = function(nums) {
  const binarySearchPosition = (dp, target, hi) => {
      let lo = 0;
      while (lo <= hi) {
          let mid = Math.floor((lo+hi)/2);
          if (target === dp[mid]) return mid;
          else if (target < dp[mid]) hi = mid-1;
          else lo = mid+1;
      }
      return lo;
  }
  
  if (nums === null || nums.length===0) return 0;
  if (nums.length === 1) return 1;
  let dp = new Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
  for (let i=0; i<nums.length; i++){
      let pos = binarySearchPosition(dp, nums[i], i);
      dp[pos] = nums[i];
  }

  for (let i = dp.length-1; i >= 0; i--){
      if (dp[i] !== Number.MAX_SAFE_INTEGER) return i+1;
  }
  
  return 0;
};  