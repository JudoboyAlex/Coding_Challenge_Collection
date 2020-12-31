/*
Runtime: 80 ms, faster than 78.53% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
Memory Usage: 39.1 MB, less than 85.14% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
*/
var maxProfit = function(prices) {
  let total = 0;
  for (let day = 0; day < prices.length - 1; day++) {
      if (prices[day] < prices[day + 1]) {
          total += prices[day + 1] - prices[day];
      }
  }
  return total;
};