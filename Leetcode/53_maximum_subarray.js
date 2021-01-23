/*
Runtime: 84 ms, faster than 76.33% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 39 MB, less than 79.05% of JavaScript online submissions for Maximum Subarray.
*/

var maxSubArray = function(nums) {

  let maxSoFar=nums[0];
  let maxEndingHere=nums[0];
  
  for (let i=1; i<nums.length; i++){
    maxEndingHere= Math.max(maxEndingHere+nums[i], nums[i]);
    maxSoFar=Math.max(maxSoFar, maxEndingHere);	
  }
  return maxSoFar;
  
};