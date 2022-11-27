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

/*
Big O Notation:
Time Complexity: O(c) | Where c is the number of chars in the word. As we will have to travel through the tree for each char. Arguably, it's O(n) as we have to traverse the entire tree for each char in the event that the tree only has 1 word.
Space Complexity: O(b) | Where b is the number of chars in the word. As in the worst case we will have to create a new node for each char in the word.
*/
