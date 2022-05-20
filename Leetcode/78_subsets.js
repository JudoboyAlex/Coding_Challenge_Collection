// Dfs
function subsets(nums) {
  const arr = [];
  dfs([], 0);

  function dfs(path, index) {
    arr.push(path);
    for (let i = index; i < nums.length; i++) {
      dfs([...path, nums[i]], i + 1);
    }
  }

  return arr;
}

// Time: O(N x 2n)
// Space: O(N)

// Backtracking
var subsets = function (nums) {
  let result = [[]];

  function backtrack(first, current) {
    // we iterate over the indexes i from 'first' to the length
    //of the entire sequence 'nums'
    for (let i = first; i < nums.length; i++) {
      current.push(nums[i]);

      // use distructure operator to clone 'current' value and save to 'result'
      result.push([...current]);

      // generate all other subsets for the current subset.
      // increasing the position by one to avoid duplicates in 'result'
      backtrack(i + 1, current);

      // BACKTRACK.
      current.pop();
    }
  }

  backtrack(0, []);
  return result;
};