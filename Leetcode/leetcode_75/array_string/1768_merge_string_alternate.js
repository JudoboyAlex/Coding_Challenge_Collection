// My Solution
var mergeAlternately = function (word1, word2) {
  word1 = word1.split("");
  word2 = word2.split("");
  let count = 0;
  for (let i = 1; i < word1.length; i += 2) {
    word1.splice(i, 0, word2[count]);
    count++;
    if (count === word1.length || count === word2.length) {
      break;
    }
  }
  return [...word1, ...word2.slice(count)].join("");
};

// Two Pointers

var mergeAlternately = function (word1, word2) {
  let i = 0;
  let res = "";
  while (i < Math.max(word1.length, word2.length)) {
    if (word1[i]) res += word1[i];
    if (word2[i]) res += word2[i];

    i++;
  }

  return res;
};

/*
Complexity Analysis
Here, m is the length of word1 and nnn is the length of word2.

Time complexity: O(m+n)

We iterate over word1 and word2 once and push their letters into result. It would take O(m+n) time.
Space complexity: O(1)

Without considering the space consumed by the input strings (word1 and word2) and the output string (result), we do not use more than constant space.
*/