/* My Solution
Runtime: 124 ms, faster than 8.94% of JavaScript online submissions for Reverse Integer.
Memory Usage: 40 MB, less than 17.26% of JavaScript online submissions for Reverse Integer.*/
var reverse = function(x) {
  
  let arr = [];
  let finalReverse;
  let nums = x.toString().split("")
 
  if(nums.length === 1){
    return nums[0];
  }
  for(let i=0; i < nums.length; i++){
    if(nums[i] === "-"){
      arr.push(nums[i])
    }
    
  }
  let reversed = nums.reverse();

  if(
    arr[0] && reversed[0] === "0"
  ){
    reversed.pop();
    reversed.shift();
    finalReverse = arr[0] + reversed.join("");
  } else if(
    reversed[0] === "0"
  ){
    reversed.shift();
    finalReverse = reversed.join("");
  } else if(
    arr[0]
  ){
    reversed.pop();
    finalReverse = arr[0] + reversed.join("");
  } else {
    finalReverse = reversed.join("")
  }

  if(finalReverse <= Math.pow(-2, 31) || finalReverse >= (Math.pow(2, 31) - 1)){
    return 0;
  } else {
    return finalReverse;
  }
};

/* Better Solution
Runtime: 84 ms, faster than 97.33% of JavaScript online submissions for Reverse Integer.
Memory Usage: 40 MB, less than 17.26% of JavaScript online submissions for Reverse Integer.*/
const reverse = x => {
  const limit = 2147483648;
  const k = x < 0 ? -1 : 1;
  const n = Number(String(Math.abs(x)).split('').reverse().join(''));
  return n > limit ? 0 : n * k;
};