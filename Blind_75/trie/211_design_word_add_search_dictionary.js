/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.trie = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let root = this.trie;
  for (let i = 0; i < word.length; i++) {
    if (root[word[i]] == null) root[word[i]] = {};
    root = root[word[i]];
  }
  root.isEnd = true;
};
/*
Complexity Analysis

Time complexity: O(M), where M is the key length. At each step, we either examine or create a node in the trie. That takes only M operations.

Space complexity: O(M). In the worst-case newly inserted key doesn't share a prefix with the keys already inserted in the trie. We have to add MMM new nodes, which takes O(M) space.
*/

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  return this.dfs(word, 0, this.trie);
};

WordDictionary.prototype.dfs = function (word, index, node) {
  if (index == word.length) return node.isEnd == true;

  if (word[index] == ".") {
    for (let key in node) {
      if (this.dfs(word, index + 1, node[key])) return true;
    }
  } else {
    if (node[word[index]] != null) {
      return this.dfs(word, index + 1, node[word[index]]);
    }
  }
  return false;
};

/*
Complexity Analysis

Time complexity: O(M) for the "well-defined" words without dots, where M is the key length, and N is a number of keys, and O(N⋅26M) for the "undefined" words. That corresponds to the worst-case situation of searching an undefined word .........⏟M times which is one character longer than all inserted keys.

Space complexity: O(1) for the search of "well-defined" words without dots, and up to O(M) for the "undefined" words, to keep the recursion stack.
*/