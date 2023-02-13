// trie solution
var suggestedProducts = function (products, searchWord) {
  products.sort();

  let trie = {};
  for (let p of products) {
    let root = trie;
    for (let i = 0; i < p.length; i++) {
      if (!root[p[i]]) root[p[i]] = { sug: [] };
      if (root[p[i]]["sug"].length < 3) root[p[i]]["sug"].push(p);
      root = root[p[i]];
    }
  }

  let root = trie,
    res = [];
  for (let i = 0; i < searchWord.length; i++) {
    if (root) root = root[searchWord[i]];
    res.push(!root ? [] : root["sug"]);
  }

  return res;
};

/*
Complexity Analysis

Time complexity : O(M) to build the trie where M is total number of characters in products For each prefix we find its representative node in O(len(prefix)) and dfs to find at most 3 words which is an O(1) operation. Thus the overall complexity is dominated by the time required to build the trie.

In Java there is an additional complexity of O(m2) due to Strings being immutable, here m is the length of searchWord.
Space complexity : O(26n)=O(n). Here n is the number of nodes in the trie. 26 is the alphabet size. Space required for output is O(m) where m is the length of the search word.
*/

// Sort solution

var suggestedProductsSort = function (products, searchWord) {
  products.sort();
  let res = [];
  for (let i = 0; i < searchWord.length; i++) {
    products = products.filter((p) => p[i] == searchWord[i]);
    res.push(products.slice(0, 3));
  }
  return res;
};