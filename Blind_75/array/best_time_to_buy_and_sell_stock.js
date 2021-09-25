// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
  let max = 0;
  let min = Infinity;
  for(let i = 0; i < prices.length; i++) {
      min = Math.min(min, prices[i]);
      max = Math.max(max, prices[i] - min);
  }    
  
  return max;
};

console.log(maxProfit([7,1,5,3,6,4]))

// Complexity Analysis

// Time complexity : O(n)O(n). Only a single pass is needed.

// Space complexity : O(1)O(1). Only two variables are used.