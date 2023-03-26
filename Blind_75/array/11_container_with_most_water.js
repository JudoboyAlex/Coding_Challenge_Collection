const maxArea = (height) => {
	let result = 0,
		left = 0,
		right = height.length - 1;

	while (left < right) {
		let smallestSide = Math.min(height[left], height[right]);
		let area = (right - left) * smallestSide;

		if (area > result) result = area;

		if (height[left] < height[right]) left++;
		else right--;
	}

	return result;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7])) // 49

// Time complexity : O(n). Single pass.
// Space complexity : O(1). Constant space is used.

// Solution #2
var maxArea2 = function (H) {
  let result = 0,
    left = 0,
    right = H.length - 1;
  while (left < right) {

    result = Math.max(result,/*calculates height*/Math.min(H[left], H[right]) * /*calculates width*/(right - left));
    H[left] <= H[right] ? left++ : right--;
  }
  return result;
};