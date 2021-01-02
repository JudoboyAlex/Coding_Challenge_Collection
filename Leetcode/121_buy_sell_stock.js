/*
Runtime: 244 ms, faster than 25.48% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 39.4 MB, less than 43.58% of JavaScript online submissions for Best Time to Buy and Sell Stock.
*/
//O(n^2) and O(1) space
var maxProfit = function(prices) {
  let biggest = 0;
  for(let i = 0; i < prices.length-1; i++){
    for(let j = i+1; j < prices.length; j++){
      if(prices[i] < prices[j] && (prices[j] - prices[i]) > biggest){
        biggest = prices[j] - prices[i]
      }
    }
  }
  return biggest;
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))

/*
Runtime: 76 ms, faster than 94.78% of JavaScript online submissions for Best Time to Buy and Sell Stock.
Memory Usage: 39.3 MB, less than 43.58% of JavaScript online submissions for Best Time to Buy and Sell Stock.
*/
//O(n) and O(1) space
var maxProfit = function(prices) {
  let minprice = Number.MAX_VALUE;
  let maxprofit = 0;
  for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minprice)
          minprice = prices[i];
      else if (prices[i] - minprice > maxprofit)
          maxprofit = prices[i] - minprice;
  }
  return maxprofit;
};