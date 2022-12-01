var longestPalindrome = function (s) {
  let count = 0;
  let keys = {};

  for (let char of s) {
    keys[char] = (keys[char] || 0) + 1;
    if (keys[char] % 2 == 0) count += 2;
  }
  return s.length > count ? count + 1 : count;
};

/*
Complexity Analysis

Time Complexity: O(N), where N is the length of s. We need to count each letter.

Space Complexity: O(1), the space for our count, as the alphabet size of s is fixed. We should also consider that in a bit complexity model, technically we need O(logN) bits to store the count values.
*/