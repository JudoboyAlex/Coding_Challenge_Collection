/*
Runtime: 96 ms, faster than 34.94% of JavaScript online submissions for Happy Number.
Memory Usage: 40.5 MB, less than 43.20% of JavaScript online submissions for Happy Number.
*/
var isHappy = function(n) {
  let sum = 0;
  let exist_nums = new Set()
  while (sum !== 1) {
      n = n.toString().split("").reduce((p, c) => {
          return p + c * c;
      }, 0);
      sum = n;
      if (exist_nums.has(sum)) {
          return false;
      }
      exist_nums.add(sum)
  }
  return true;
};