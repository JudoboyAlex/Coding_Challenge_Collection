var combinationSum = function (candidates, target) {
  const result = [];

  function permute(arr = [], sum = 0, idx = 0) {
    if (sum > target) return;
    if (sum === target) result.push(arr);
    for (let i = idx; i < candidates.length; i++) {
      permute([...arr, candidates[i]], sum + candidates[i], i);
    }
  }
  permute();
  return result;
};

// Time Complexity: O(N * T/M + 1) 
// Space: O(T/M)