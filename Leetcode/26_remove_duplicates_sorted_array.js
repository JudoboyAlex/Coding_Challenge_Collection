// Runtime: 180 ms, faster than 9.31% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 47.3 MB, less than 5.12% of JavaScript online submissions for Remove Duplicates from Sorted Array.

var removeDuplicates = function(nums) {
  if (nums.length == 0) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
     
      if (nums[j] != nums[i]) {
          i++;
          console.log(i)
          nums[i] = nums[j];
      }
  }
  return i + 1;
  
};