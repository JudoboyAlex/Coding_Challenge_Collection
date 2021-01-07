// My Solution
/*
Runtime: 76 ms, faster than 71.45% of JavaScript online submissions for Climbing Stairs.
Memory Usage: 38.6 MB, less than 13.15% of JavaScript online submissions for Climbing Stairs.
*/
var climbStairs = function(n) {
  let arr = [1,1];
     for(let i =2; i < n+1; i++){
         arr.push(arr[i-2] + arr[i-1])
     }
     return arr[n];
 };