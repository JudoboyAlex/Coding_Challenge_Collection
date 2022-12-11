const wordBreak = (s, wordDict) => {
  if (wordDict == null || wordDict.length === 0) return false;
  const set = new Set(wordDict);
  const visited = new Set();
  const q = [0];

  while (q.length) {
    const start = q.shift();

    if (!visited.has(start)) {
      for (let end = start + 1; end <= s.length; end++) {
        if (set.has(s.slice(start, end))) {
          if (end === s.length) return true;
          q.push(end);
        }
      }
      visited.add(start);
    }
  }
  return false;
};

/*
Complexity Analysis

n is the length of the input string.

Time complexity : O(n^3). For every starting index, the search can continue till the end of the given string.

Space complexity : O(n). Queue of at most nnn size is needed.
*/

// BFS Solution#2
var wordBreak2   = function (s, wordDict) {
  const words = new Set(wordDict);
  const wordLens = new Set(wordDict.map((word) => word.length));
  const starts = new Set([0]);
  for (let start of starts) {
    // this dynamically increases with every .add from the latter for loop
    // meaning, you could have differing starts, as a result of cutting down the string with the words u matched
    for (let len of wordLens) {
      // for every unique length of words
      // you literally try all of the lengths
      // so this deals with partial permutations
      // as well as duplicates like aa, aaaaa
      if (words.has(s.slice(start, start + len))) {
        // do we have a word in our dictionary matching that length of words?
        starts.add(start + len);
        // if so , add the remaining of the string so u can try starting from there instead
        // now u can attempt to try starting from this new location
      }
    }
  }
  return starts.has(s.length); // so long as the set has your length, it means that you managed to find a perfect match
};