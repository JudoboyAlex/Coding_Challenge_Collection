// dfs solution
var permute = function (nums) {
  const output = [];
  /**
   * The goal is break down the problem by finding permutations in subarrays.
   * So we will maintain a subarray of fixed elements and a subarray for
   * exploring permutations.
   *
   *                  [1], [2, 3]    [1, 2], [3]    [1, 2, 3]
   * [], [1, 2, 3] -> [2], [1, 3] -> [1, 3], [2] -> [1, 3, 2]
   *                  [3], [1, 2]    [2, 1], [1]    [2, 1, 3]
   *                                 [2, 3], [1]    [2, 3, 1]
   *                                 [3, 1], [2]    [3, 1, 2]
   *                                 [3, 2], [1]    [3, 2, 1]
   */
  const dfs = (curr, rest) => {
    // base case. Found a permutation because there's nothing else to explore.
    if (rest.length === 0) {
      output.push(curr);
      return;
    }
    for (let i = 0; i < rest.length; i++) {
      dfs([...curr, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]);
    }
  };
  dfs([], nums);

  return output;
};

// backtracking solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function(nums) {
  const result = [];
  const temp = [];
  // we are using a common strategy to initialize an 'answer' object, and pass it into
  // a recursion helper to modify the values. Sometimes it helps to separate this because
  // there are times you will want to have conditionals or a for loop in the top level code
  // before you call a recursive function.
  findPermutations(temp, nums, result);
  return result;
};

const findPermutations = (temp, nums, result) => {
  if (!nums.length) {
   // Here it is important to call concat(), just a fancy way of copying the original array.
   // See what happens when you remove concat, things will go crazy because you are 
   // modifying an object that is referenced elsewhere!
    result.push(temp.concat());
    return;
  }

  for (var i = 0; i < nums.length; i++) {
	const newNum = nums[i];
	// we've picked our new number to add, so add it to our "picked" array called temp
    temp.push(newNum);
	// remember, in the first iteration, after picking 1, we need to pass in [2, 3] as the numbers left.
    nums.splice(i, 1);
    findPermutations(temp, nums, result);
	// Remember to "reset" our temp and nums array before our next iteration, where we pick the 2, and leave [1,3] 
    temp.pop();
    nums.splice(i, 0, newNum);
  }
};

// grokking bfs solution
const Deque = require("./collections/deque"); //http://www.collectionsjs.com

function find_permutations(nums) {
  let numsLength = nums.length,
    result = [],
    permutations = new Deque();
  permutations.push([]);
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    // we will take all existing permutations and add the current number to create new permutations
    const n = permutations.length;
    for (let p = 0; p < n; p++) {
      const oldPermutation = permutations.shift();
      // create a new permutation by adding the current number at every position
      for (let j = 0; j < oldPermutation.length + 1; j++) {
        const newPermutation = oldPermutation.slice(0); // clone the permutation
        newPermutation.splice(j, 0, currentNumber); // insert currentNumber at index 'j'
        if (newPermutation.length === numsLength) {
          result.push(newPermutation);
        } else {
          permutations.push(newPermutation);
        }
      }
    }
  }

  return result;
}

console.log("Here are all the permutations:");
const result = find_permutations([1, 3, 5]);
result.forEach((permutation) => {
  console.log(permutation);
});

// grokking recursive solution
function generate_permutations(nums) {
  const result = [];
  generate_permutations_recursive(nums, 0, [], result);
  return result;
}

function generate_permutations_recursive(
  nums,
  index,
  currentPermutation,
  result
) {
  if (index === nums.length) {
    result.push(currentPermutation);
  } else {
    // create a new permutation by adding the current number at every position
    for (let i = 0; i < currentPermutation.length + 1; i++) {
      newPermutation = currentPermutation.slice(0); // clone the permutation
      newPermutation.splice(i, 0, nums[index]); // insert nums[index] at index 'i'
      generate_permutations_recursive(nums, index + 1, newPermutation, result);
    }
  }
}

console.log("Here are all the permutations:");
const output = generate_permutations([1, 3, 5]);
output.forEach((permutation) => {
  console.log(permutation);
});

/*
Time complexity#
We know that there are a total of N! permutations of a set with ‘N’ numbers. In the algorithm above, 
we are iterating through all of these permutations with the help of the two ‘for’ loops. 
In each iteration, we go through all the current permutations to insert a new number 
in them on line 17 (line 23 for C++ solution). 
To insert a number into a permutation of size ‘N’ will take O(N), which makes the overall 
time complexity of our algorithm O(N*N!)

Space complexity#
All the additional space used by our algorithm is for the result list and 
the queue to store the intermediate permutations. If you see closely, 
at any time, we don’t have more than N! permutations between the result list and the queue. 
Therefore the overall space complexity to store N! permutations each containing N elements will be O(N*N!)
*/