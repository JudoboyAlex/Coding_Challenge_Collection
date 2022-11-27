function isAnagram(s, t) {
	// const map = {};
	// s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
	// t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
	// return Object.keys(map).every(k => map[k] === 0);
    
  let hash = {};
  s.split("").map((w) => hash[w] ? hash[w] = hash[w] + 1 : hash[w] = 1)
  t.split("").map((w) => hash[w] ? hash[w] = hash[w] - 1 : hash[w] = -1)
  return Object.keys(hash).every((a) => hash[a] === 0)
    
   // return s.toLowerCase().split("").sort().join("") === t.toLowerCase().split("").sort().join("")
}
// Time O(n), Space O(1)

// Runtime: 72 ms, faster than 99.55% of JavaScript online submissions for Valid Anagram.
// Memory Usage: 42 MB, less than 37.68% of JavaScript online submissions for Valid Anagram.