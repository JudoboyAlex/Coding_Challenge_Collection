// My Solution
// Runtime: 236 ms, faster than 32.11% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 49 MB, less than 5.63% of JavaScript online submissions for Palindrome Number.
var isPalindrome = function(x) {
  let reverse = x.toString().split("").reverse().join("")
  return x === Number(reverse) ? true : false

};

console.log(isPalindrome(121))

// Better Solution
// Runtime: 192 ms, faster than 97.48% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 48.3 MB, less than 5.63% of JavaScript online submissions for Palindrome Number.

// Time complexity : O(log_{10}(n)) 
// We divided the input by 10 for every iteration, so the time complexity is O(log_{10}(n))
// Space complexity : O(1)
   
var isPalindrome = function(x) {
  if (x<0 || x%10 === 0 && x !== 0) return false;
  let reverse = 0;
  let num = x;
  while(num > reverse) {
      reverse = num%10 + reverse*10;
      num = parseInt(num/10);
  }
  return  (num === reverse || num === parseInt(reverse/10));
};