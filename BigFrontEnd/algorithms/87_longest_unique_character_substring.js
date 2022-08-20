function longestUniqueSubstr(str) {
  const charMap = new Set();
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (charMap.has(str[i])) {
      if (charMap.size > result.length) {
        result = Array.from(charMap).join("");
        charMap.clear();
      }
    } else {
      charMap.add(str[i]);
    }
  }
  return result;
}

console.log(longestUniqueSubstr("a12#2")); // 'a12#'
console.log(longestUniqueSubstr("abcabc")); // 'abc', or 'bca', or 'cab'
console.log(longestUniqueSubstr("aaaaa")); // 'a'

// similar to https://leetcode.com/problems/longest-substring-without-repeating-characters/