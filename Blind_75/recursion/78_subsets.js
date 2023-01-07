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

// Iterative Solution
var subsets = function (nums) {
  const arr = [[]];
  for (i = 0; i < nums.length; i++) {
    currentNumber = nums[i];

    const n = arr.length;
    for (j = 0; j < n; j++) {
      const set1 = arr[j].slice(); // clone the permutation
      set1.push(currentNumber);
      arr.push(set1);
    }
  }

  return arr;
};
/*
Complexity Analysis

Time complexity: O(N×2N) to generate all subsets and then copy them into output list.

Space complexity: O(N). We are using O(N) space to maintain curr, and are modifying curr in-place with backtracking. Note that for space complexity analysis, we do not count space that is only used for the purpose of returning output, so the output array is ignored.
*/