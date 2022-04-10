// grokking solution
function find_missing_number(nums) {
  let i = 0;
  const n = nums.length;
  while (i < n) {
    j = nums[i];
    if (nums[i] < n && nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }

  // find the first number missing from its index, that will be our required number
  for (i = 0; i < n; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }

  return n;
}

console.log(find_missing_number([4, 0, 3, 1])); // 2
console.log(find_missing_number([8, 3, 5, 2, 4, 6, 0, 1])); // 7

// leetcode solution
var missingNumber = function (nums) {
  let sum = nums.length;
  for (let i = 0; i < nums.length; i++) {
    sum += i - nums[i];
  }

  return sum;
};

/*
Time complexity#
The time complexity of the above algorithm is O(n). In the while loop, although 
we are not incrementing the index i when swapping the numbers, 
this will result in more than n iterations of the loop, but in the worst-case scenario, 
the while loop will swap a total of n-1 numbers and once a number is at its correct index, 
we will move on to the next number by incrementing i. In the end, 
we iterate the input array again to find the first number missing from its index, 
so overall, our algorithm will take O(n) + O(n-1) + O(n),
which is asymptotically equivalent to O(n).

Space complexity#
The algorithm runs in constant space O(1).
*/