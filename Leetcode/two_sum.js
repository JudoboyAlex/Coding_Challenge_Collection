// My Solution-- faster than 6.71% submissions 😩
// O(n2)
var twoSum = function (nums, target) {
  let arr = [];
  if (nums.length === 2) {
    arr = [0,1]
  } else {
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === target) {
          arr.push(i);
          arr.push(j);
        }
      }
    }
  }
  return arr;
};

// Best Solution
// O(n) - One-pass Hash Table
let twoSum = (nums, target) => {
  let map = new Map();
  for(let i=0;i<nums.length; i++){
      if(map.has(target - nums[i])){
          return [map.get(target-nums[i]), i];
      } 
      map.set(nums[i], i);
  }
  return [];
};



console.log(twoSum([3,5,-4,8,11,1,-1,6], 10))