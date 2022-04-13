// leetcode dfs
function subsets(nums) {
  const powerset = [];
  generatePowerset([], 0);

  function generatePowerset(path, index) {
    powerset.push(path);
    for (let i = index; i < nums.length; i++) {
      generatePowerset([...path, nums[i]], i + 1);
    }
  }

  return powerset;
}

//grokking bfs
function find_subsets(nums) {
  const subsets = [];
  // start by adding the empty subset
  subsets.push([]);
  for (i = 0; i < nums.length; i++) {
    currentNumber = nums[i];
    // we will take all existing subsets and insert the current number in them to create new subsets
    const n = subsets.length;
    for (j = 0; j < n; j++) {
      // create a new subset from the existing subset and insert the current element to it
      const set1 = subsets[j].slice(0); // clone the permutation
      set1.push(currentNumber);
      subsets.push(set1);
    }
  }

  return subsets;
}

console.log(find_subsets([1, 2, 3]));

/*
Time complexity#
Since, in each step, the number of subsets doubles as we add each element to all the existing subsets, 
therefore, we will have a total of O(2^N) subsets, where ‘N’ is the total number of elements 
in the input set. And since we construct a new subset from an existing set, 
therefore, the time complexity of the above algorithm will be O(N*2^N)

Space complexity#
All the additional space used by our algorithm is for the output list. Since we will have a total of O(2^N)
subsets, and each subset can take up to O(N) space, therefore, the space complexity 
of our algorithm will be O(N*2^N)
*/