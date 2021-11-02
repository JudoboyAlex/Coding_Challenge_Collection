const coinChange = (coins, amount) => {
  // dp[i] represents the least amount of coins that can make the value equals to the i
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(
          dp[i],
          dp[i - coin] + 1,
        );
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};

console.log(coinChange([1,2,5],11))