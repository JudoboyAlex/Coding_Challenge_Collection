//My Solution
/*
Runtime: 112 ms, faster than 18.37% of JavaScript online submissions for Missing Number.
Memory Usage: 41.6 MB, less than 23.20% of JavaScript online submissions for Missing Number.
*/

var missingNumber = function(nums) {
  let arr = nums.sort( (a,b) => a-b);

  for(let i = 0; i < arr.length;i++){
    if(arr.length === 1  && arr[i] === 0){
      return arr[i]+1;
    } else if(
    arr.length === 1  && arr[i] === 1
    ){
      return arr[i]-1;
    }
  
    if( arr[i] > 0 && arr[i] - 1 != arr[i-1] ){
      
      return arr[i] - 1;
    } 
  }

  return arr[arr.length -1] + 1;
};

console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
console.log(missingNumber([0]))

/*
Runtime: 72 ms, faster than 99.10% of JavaScript online submissions for Missing Number.
Memory Usage: 41.1 MB, less than 56.32% of JavaScript online submissions for Missing Number.
*/
var missingNumber = function(nums) {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2;
  
  const sum = nums.reduce((total, num) => total += num, 0);
  return expectedSum - sum;
};