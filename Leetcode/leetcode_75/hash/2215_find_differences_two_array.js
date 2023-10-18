const findDifference = function (nums1, nums2) {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);

  for (let item of nums1) {
    if (s2.has(item)) {
      s1.delete(item);
      s2.delete(item);
    }
  }
  return [Array.from(s1), Array.from(s2)];
};

/*
Complexity Analysis

Here, N is the length of list nums1, and M is the length of nums2.

Time complexity: O(N+M).

For each of the two calls to getElementsOnlyInFirstList we create a hash set from the elements in the second list, which takes linear time. 
Then we iterate over the elements in the first list and check in the set if it's present. 
The find operation in the set takes O(1)time. Hence, the total time complexity would be O(N+M).

Space complexity: O(max(N,M)).

The method getElementsOnlyInFirstList need to store elements in the set. 
In the first call, it would be nums1 elements and in the second call, it would be nums2 elements. 
The space required to store the output list is not considered part of space complexity, and hence the total space complexity would be equal to O(max(N,M)).
*/