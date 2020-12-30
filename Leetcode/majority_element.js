//My Solution using Hash Table
//O(n)
var majorityElement = function(nums) {
  let cache = {};
  let biggest = 0;
  
  for(let i = 0; i < nums.length; i++){
    cache[nums[i]] = (cache[nums[i]] || 0 ) + 1;
  }
  console.log(cache)
  for( num in cache){

    if(cache[num] > biggest){
      biggest = cache[num];
      bigInt = num;
    }
  }
  return bigInt;
};

//Better Solution
//O(n log n)
var majorityElement = function(nums) {
  nums.sort((a,b) => a - b);
  return nums[Math.floor(nums.length/2)];
};