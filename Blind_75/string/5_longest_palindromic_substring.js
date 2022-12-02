var longestPalindrome = function (s) {
  if (s.length < 1 || s == null) return "";
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = expandFromCenter(s, i, i); // abba
    let evenPalindrome = expandFromCenter(s, i - 1, i); // abcba

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }
    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }
  return longest;
};

function expandFromCenter(s, left, right) {
  let i = 0;
  while (s[left - i] && s[left - i] === s[right + i]) {
    i++;
  }
  i--; // to get rid of none-palindrome character;
  return s.slice(left - i, right + i + 1);
}

/*
Complexity Analysis

Time complexity : O(n2). Since expanding a palindrome around its center could take O(n) time, the overall complexity is O(n2).

Space complexity : O(1).
*/
