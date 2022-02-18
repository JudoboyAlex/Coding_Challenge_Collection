// Kadane's
// O(n) time
// O(1) space
const maxProduct = (nums) => {
	if (nums.length === 0) return 0;

	let maxSoFar = nums[0],
		minSoFar = nums[0],
		greatestMax = nums[0];

	for (var i = 1; i < nums.length; i++) {
		let currVal = nums[i],
            tempMax = maxSoFar * currVal,
            tempMin = minSoFar * currVal;
		/*
		 * What's the largest number at this point in time?
		 *      The new number introduced?
		 *      The minSoFar times new number?
		 *      The maxSoFar times new number?
		 */
		maxSoFar = Math.max(currVal, tempMin, tempMax);

		/*
		 * What's the smallest number at this point in time?
		 *      The new number introduced?
		 *      The minSoFar times new number?
		 *      The old maxSoFar times new number?
		 */
		minSoFar = Math.min(currVal, tempMin, tempMax);
		/*
		 *
		 * Greatest number between maxSoFar and greatestMax?
		 */
		greatestMax = Math.max(greatestMax, maxSoFar);
	}

	return greatestMax;
};

console.log(maxProduct([2,3,-2,4])) // 6
console.log(maxProduct([-2,3,-4])) // 24


// Easier to understand solution
var maxProduct = function (nums) {
  let max = nums[0];
  let currMax = 1;
  let currMin = 1;
  let prevMax = 1;

  for (let num of nums) {
    prevMax = currMax * num;
    currMax = Math.max(prevMax, currMin * num, num);
    currMin = Math.min(prevMax, currMin * num, num);
    max = Math.max(max, currMax);
  }

  return max;
};