function cyclic_sort(nums) {
  let i = 0;
  while (i < nums.length) {
    const j = nums[i] - 1;
    if (nums[i] !== nums[j]) {
      [nums[i], nums[j]] = [nums[j], nums[i]]; // swap
    } else {
      i += 1;
    }
  }
  return nums;
}


console.log(cyclic_sort([3, 1, 5, 4, 2]));
console.log(cyclic_sort([2, 6, 4, 3, 1, 5]));
console.log(cyclic_sort([1, 5, 6, 4, 3, 2]));

// Time complexity#
// The time complexity of the above algorithm is O(n)O(n). 
// Although we are not incrementing the index i when swapping the numbers, 
// this will result in more than ‘n’ iterations of the loop, but in the worst-case scenario, 
// the while loop will swap a total of ‘n-1’ numbers and once a number is at its correct index, 
// we will move on to the next number by incrementing i. 
// So overall, our algorithm will take O(n) + O(n-1)O(n)+O(n−1) which is asymptotically equivalent to O(n)O(n).

// Space complexity#
// The algorithm runs in constant space O(1)O(1).