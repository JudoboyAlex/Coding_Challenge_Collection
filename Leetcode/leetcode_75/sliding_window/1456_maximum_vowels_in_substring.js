/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// My Too Slow Solution
var maxVowels = function(s, k) {
  let matched = 0;
  let left = 0;
  let right = k - 1;
  let max = 0;
  let strArr = s.split("");

  while(right < s.length){
    for(let i = left; i <= right; i++){
      if(strArr[i] === 'a' || strArr[i] === 'e' || strArr[i] === 'i' || strArr[i] === 'o' || strArr[i] === 'u'){
        matched++;
        if(matched === k){
          return matched;
        }
      }
    }
    max = Math.max(matched, max);
    matched = 0;
    left++;
    right++;
  }
  return max;
};

// Sliding Window Solution
function maxVowels(s, k) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let maxVowelCount = 0;
  let currentVowelCount = 0;

  // Calculate the vowel count in the first k characters
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) {
      currentVowelCount++;
    }
  }
  maxVowelCount = currentVowelCount;

  // Continue the sliding window to find the maximum vowel count
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i - k])) {
      currentVowelCount--; // Remove the vowel going out of the window
    }
    if (vowels.has(s[i])) {
      currentVowelCount++; // Add the vowel coming into the window
    }
    maxVowelCount = Math.max(maxVowelCount, currentVowelCount);
  }

  return maxVowelCount;
}

/*
Complexity Analysis
Let nnn be the length of the input string s.

Time complexity: O(n)

We apply 1 iteration over s.
At each step in the iteration, we check if the newly added character and the removed character are in vowels, which takes constant time.
To sum up, the time complexity is O(n).
Space complexity: O(1)

We need to record several parameters, count and answer, which takes O(1) space.
The set vowels contains 5 vowel letters which takes O(1) space.
*/
