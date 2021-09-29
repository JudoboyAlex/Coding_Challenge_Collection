var twoSum = function(nums, target) {
  let map = new Map();
  let result;
  for(let i = 0; i < nums.length; i++){
      if(map.has(target-nums[i])){
          result = map.get(target-nums[i])
          return [i, result ]
      } else {
          map.set(nums[i], i)
      }
  }
};


console.log(twoSum([3,5,-4,8,11,1,-1,6], 10))

// Runtime: 68 ms, faster than 97.93% of JavaScript online submissions for Two Sum.
// Memory Usage: 41.3 MB, less than 18.95% of JavaScript online submissions for Two Sum.