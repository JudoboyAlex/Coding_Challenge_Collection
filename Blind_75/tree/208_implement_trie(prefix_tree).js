// My Solution
var Trie = function() {
  this.val = [];
};

/** 
* @param {string} word
* @return {void}
*/
Trie.prototype.insert = function(word) {
  this.val.push(word)
  return this.val;
};

/** 
* @param {string} word
* @return {boolean}
*/
Trie.prototype.search = function(word) {
  if(this.val.includes(word)){
      return true;
  } else {
      return false;
  }
};

/** 
* @param {string} prefix
* @return {boolean}
*/
Trie.prototype.startsWith = function(prefix) {
  if(this.val.length === 0) return false;
  
  for(word of this.val){
      if(word.slice(0,prefix.length) === prefix && word.length >=             
         prefix.length){
          return true;
      }
  }
  return false;
};

/** 
* Your Trie object will be instantiated and called as such:
* var obj = new Trie()
* obj.insert(word)
* var param_2 = obj.search(word)
* var param_3 = obj.startsWith(prefix)
*/

// ES6 Solution by top vote in leetcode
class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let node = this.root;
    for (let c of word) {
      if (node[c] == null) node[c] = {};
      node = node[c];
    }
    node.isWord = true;
  }

  traverse(word) {
    let node = this.root;
    for (let c of word) {
      node = node[c];
      if (node == null) return null;
    }
    return node;
  }

  search(word) {
    const node = this.traverse(word);
    return node != null && node.isWord === true;
  }

  startsWith(prefix) {
    return this.traverse(prefix) != null;
  }
}