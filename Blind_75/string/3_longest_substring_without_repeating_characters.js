// Best Leetcode Solution
var lengthOfLongestSubstring = function(s) {
  var start = 0, maxLen = 0;
  var map = new Map();

  for(var i = 0; i < s.length; i++) {
      var ch = s[i];

      if(map.get(ch) >= start) {
        start = map.get(ch) + 1;
      }

      map.set(ch, i);

      maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
};

// console.log(lengthOfLongestSubstring("abcabcbb"))

// Educative Grokking The Coding Interview Solution
// Sliding Window
function non_repeat_substring(str) {
  let windowStart = 0,
    maxLength = 0,
    charIndexMap = {};

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    // if the map already contains the 'rightChar', shrink the window from the beginning so that
    // we have only one occurrence of 'rightChar'
    if (rightChar in charIndexMap) {
      // this is tricky; in the current window, we will not have any 'rightChar' after its previous index
      // and if 'windowStart' is already ahead of the last index of 'rightChar', we'll keep 'windowStart'
      windowStart = Math.max(windowStart, charIndexMap[rightChar] + 1);
    }
    // insert the 'rightChar' into the map
    charIndexMap[rightChar] = windowEnd;
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
    console.log(maxLength);
  }
  return maxLength;
}

console.log(non_repeat_substring("abcefabcbb"))
// console.log(`Length of the longest substring: ${non_repeat_substring('aabccbb')}`);
// console.log(`Length of the longest substring: ${non_repeat_substring('abbbb')}`);
// console.log(`Length of the longest substring: ${non_repeat_substring('abccde')}`);

// Time Complexity#
// The above algorithm’s time complexity will be O(N), where ‘N’ is the number of characters in the input string.

// Space Complexity#
// The algorithm’s space complexity will be O(K), where K is the number of distinct characters in the input string. 
// This also means K<=N, because in the worst case, the whole string might not have any duplicate character, 
// so the entire string will be added to the HashMap. Having said that, 
// since we can expect a fixed set of characters in the input string (e.g., 26 for English letters), 
// we can say that the algorithm runs in fixed space O(1); in this case, 
// we can use a fixed-size array instead of the HashMap.

// My while loop solution
var lengthOfLongestSubstring = function (s) {
  let seen = new Map();
  let left = 0;
  let right = 0;
  let max = 0;

  while (right < s.length) {
    if (seen.has(s[right])) {
      left = Math.max(left, seen.get(s[right]) + 1);
    }
    seen.set(s[right], right);
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};