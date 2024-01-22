var closeStrings = function (word1, word2) {
  if (word1.length != word2.length) return false;

  let oneMap = {};
  let twoMap = {};

  for (let i = 0; i < word1.length; i++) {
    oneMap[word1[i]] = oneMap[word1[i]] ? oneMap[word1[i]] + 1 : 1;
    twoMap[word2[i]] = twoMap[word2[i]] ? twoMap[word2[i]] + 1 : 1;
  }
  let arr = Object.values(twoMap);
  for (let i in oneMap) {
    if (!twoMap[i]) return false;
    let index = arr.indexOf(oneMap[i]);
    if (index == -1) return false;
    arr.splice(index, 1);
  }

  return arr.length == 0;
};

/*
Complexity Analysis

Time Complexity: O(n). We iterate over each word to build the hashmap which would take O(n) time.
Further, we sort the character keys and frequency values of each hashmap. The maximum size of hashmap would be 26, as we store each character a-z only once. In the worst case, all the sort operations would take O(26log⁡26) time to sort those frequency values.
This gives us total time complexity as O(n).

Space Complexity: O(1), as the maximum size of each hashmap would be 262626, we are using constant extra space.
*/
