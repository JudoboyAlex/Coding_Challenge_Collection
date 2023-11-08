/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let left = 0,
    right = 0;
  while (left < s.length && right < t.length) {
    if (s[left] === t[right]) {
      left++;
    }
    right++;
  }
  return left === s.length;
};

/*
Complexity Analysis

Let ∣S∣ be the length of the source string, and ∣T∣ be the length of the target string.

Time Complexity: O(∣T∣)

The analysis is the same as the previous approach.
Space Complexity: O(1)

We replace the recursion with iteration. In the iteration, a constant memory is consumed regardless of the input.
*/
