var merge = function (nums1, m, nums2, n) {
  let idx1 = m - 1,
    idx2 = n - 1,
    idx3 = m + n - 1;
  while (idx2 >= 0) {
    nums1[idx3--] = nums1[idx1] > nums2[idx2] ? nums1[idx1--] : nums2[idx2--];
  }
};
// O(n)

// My Solution using bubble sort
var merge = function (nums1, m, nums2, n) {
  while (n > 0) {
    nums1[m] = nums2[n - 1];
    n--;
    m++;
  }
  let temp;
  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums1.length; j++) {
      if (nums1[j] > nums1[j + 1]) {
        temp = nums1[j];
        nums1[j] = nums1[j + 1];
        nums1[j + 1] = temp;
      }
    }
  }
};

/*
Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
*/