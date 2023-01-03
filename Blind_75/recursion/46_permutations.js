var permute = function (nums) {
  let result = [];

  function dfs(curr, rest) {
    if (rest.length === 0) {
      result.push(curr);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  }
  dfs([], nums);
  return result;
};

/*
Time complexity : O(∑k=1NP(N,k))

Space complexity : O(N!) since one has to keep N! solutions.
*/