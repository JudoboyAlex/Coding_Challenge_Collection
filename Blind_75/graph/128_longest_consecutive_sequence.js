// My O(n log n) solution
var longestConsecutive = function(numbers) {
  if(numbers.length === 0) return 0;
  let nums = [...new Set(numbers)].sort((a,b) => a - b);
  let count = 0;
  let max = 0;
  for(let i = 0; i < nums.length - 1; i++){
      if(nums[i] + 1 === nums[i+1]){
          count++
      }
     if(nums[i] + 1 !== nums[i+1]){
          max = Math.max(count, max)
          count = 0
      }
  }
  max = Math.max(count, max)
  return max+1;
};

console.log(longestConsecutive([[100,4,200,1,3,2]])) //4, [1, 2, 3, 4]

// O(n) solution
function longestConsecutive(nums) {
  if (nums == null || nums.length === 0) return 0;
  
  const set = new Set(nums);
  let max = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;  // make sure starting from the beginning of sequence

    let currNum = num;
    let currMax = 1;

    while (set.has(currNum + 1)) {
      currNum++;
      currMax++;
    }
    max = Math.max(max, currMax);
  }

  return max;
}

// Easy to understand solution- O(n)
var longestConsecutive = function (nums) {
  let set = new Set(nums);
  let count;
  let max = 0;

  for (let num of nums) {
    if (!set.has(num - 1)) {
      count = 0;
      while (set.has(num++)) {
        count++;
      }
      max = Math.max(max, count);
    }
  }
  return max;
};