//My Solution
/*
Runtime: 108 ms, faster than 24.15% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 47 MB, less than 23.77% of JavaScript online submissions for Contains Duplicate.
*/

var containsDuplicate = function(nums) {
  let cache = {};
  for( num  of nums){
    cache[num] = (cache[num] || 0) + 1;
    if(cache[num] > 1){
      return true;
    }
  }

  return false;
};

/*
Runtime: 80 ms, faster than 93.97% of JavaScript online submissions for Contains Duplicate.
Memory Usage: 45.2 MB, less than 46.54% of JavaScript online submissions for Contains Duplicate.
*/

var containsDuplicate = function(nums) {
  return nums.length !== new Set(nums).size
};