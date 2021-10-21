function threeSum(nums) {
	const results = []

	// obviously irrelevant if we don't have at least 3 numbers to play with!
	if (nums.length < 3) return results

	// having the numbers in ascending order will make this problem much easier.
	// also, knowing the overall problem  will take at least O(N^2) time, we can
	// afford the O(NlogN) sort operation
	nums = nums.sort((a, b) => a - b)

    // if the question asks us for a custom target, we can control it here
	let target = 0

	for (let i = 0; i < nums.length - 2; i++) {
		// `i` represents the "left" most number in our sorted set.
		// once this number hits 0, there's no need to go further since
		// positive numbers cannot sum to a negative number
		if (nums[i] > target) break

		// we don't want repeats, so skip numbers we've already seen
		if (i > 0 && nums[i] === nums[i - 1]) continue

		// `left` represents the "middle" element between `i` and `right`.
		// we will increment this up through the array while `i` and `right`
		// are anchored to their positions. we will decrement `right` for
		// for each pass through the array, and finally increment `i`
		// once `left` and `right` meet.
		let left = i + 1

		// `right` represents the "right" most element
		let right = nums.length - 1
		
		// to summarize our setup, we have `i` that starts at the beginning,
		// `right` that starts at the end, and `left` that races in between the two.
		//
		// note that `i` is controlled by our outer for-loop and will move the slowest.
		// in the meantime, `left` and `right` will take turns inching towards each other depending
		// on some logic we'll set up below. once they collide, `i` will be incremented up
		// and we'll repeat the process.

		while (left < right) {
			let sum = nums[i] + nums[left] + nums[right]

			// if we find the target sum, increment `left` and decrement `right` for
			// other potential combos where `i` is the anchor
			if (sum === target) {
				// store the valid threesum
				results.push([nums[i], nums[left], nums[right]])

				// this is important! we need to continue to increment `left` and decrement `right`
				// as long as those values are duplicated. in other words, we wanna skip values
				// we've already seen. otherwise, an input array of [-2,0,0,2,2] would result in
				// [[-2,0,2], [-2,0,2]].
				//
				// (i'm not a fan of this part because we're doing a while loop as we're
				// already inside of another while loop...)
				while (nums[left] === nums[left + 1]) left++
				while (nums[right] === nums[right - 1]) right--

				// finally, we need to actually move `left` forward and `right` backward to the
				// next unique elements. the previous while loops will not handle this.
				left++
				right--
        // [-1,0,1,2,-1,-4]
			// if the sum is too small, increment `left` to get closer to the target
			} else if (sum < target) {
				left++

			// if the sum is too large, decrement `right` to get closer to the target
			} else { // (sum > target)
				right--
			}
		}
	}

	return results
};