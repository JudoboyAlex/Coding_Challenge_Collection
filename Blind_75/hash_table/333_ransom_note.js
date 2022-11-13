var canConstruct = function (ransomNote, magazine) {
  let hashOne = {};
  for (letter of ransomNote) {
    if (hashOne[letter]) {
      hashOne[letter] += 1;
    } else {
      hashOne[letter] = 1;
    }
  }
  let hashTwo = {};
  for (letter of magazine) {
    if (hashTwo[letter]) {
      hashTwo[letter] += 1;
    } else {
      hashTwo[letter] = 1;
    }
  }
  for (letter of ransomNote) {
    if (!Object.keys(hashTwo).includes(letter)) {
      return false;
    }
    if (hashOne[letter] > hashTwo[letter]) {
      return false;
    }
  }
  return true;
};
/*
Time Complexity : O(m)
Space Complexity : O(k)/ O(1)
*/