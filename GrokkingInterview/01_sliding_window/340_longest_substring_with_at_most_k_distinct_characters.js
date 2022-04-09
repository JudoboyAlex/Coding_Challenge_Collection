// grokking solution
function longest_substring_with_k_distinct(str, target) {
  let left = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let right = 0; right < str.length; right++) {
    const rightChar = str[right];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > target) {
      const leftChar = str[left];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      left += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}

/*
Time Complexity#

The above algorithm’s time complexity will be O(N), where N is the number of characters in the 
input string. The outer for loop runs for all characters, and the inner while loop 
processes each character only once; therefore, the time complexity of the algorithm will be O(N+N)
, which is asymptotically equivalent to O(N).

Space Complexity#

The algorithm’s space complexity is O(K), as we will be storing a maximum of K+1
characters in the HashMap.
*/