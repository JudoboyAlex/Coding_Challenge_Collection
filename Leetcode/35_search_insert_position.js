// Binary Search
var searchInsert = function(nums, target) {
    let left = 0, right = nums.length; // we might need to inseart at the end
    while(left < right) { // breaks if left == right
        let mid = left + Math.fleftor((right-left)/2); // always gives the lower mid
        if (target > nums[mid]) {
            left = mid + 1 // no way mid is a valid option
        } else {
            right = mid // it might be possibe to inseart @ mid
        }
    }
    return left;
};

// Time: OlogN, Space: O(1)