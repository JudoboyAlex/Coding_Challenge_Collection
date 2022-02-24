function countSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    expand(i, i) // odd length
    expand(i, i + 1) // even length
  }
  return count

  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++
      left--
      right++
    }
  }
}

console.log(countSubstrings("abc"))
// Time: O(N)2, Space: O(1)

// Another version
var countSubstrings = function (s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    // odd-length palindromes, single character center
    count += countPalindromesAroundCenter(s, i, i);

    // even-length palindromes, consecutive characters center
    count += countPalindromesAroundCenter(s, i, i + 1);
  }
  return count;
};

function countPalindromesAroundCenter(s, low, high) {
  let count = 0;
  while (low >= 0 && high < s.length) {
    if (s.charAt(low) != s.charAt(high)) break; // the first and last characters don't match!
    // expand around the center
    low--;
    high++;
    count++;
  }
  return count;
}