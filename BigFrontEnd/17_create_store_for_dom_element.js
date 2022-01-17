class NodeStore {
  constructor() {
    this.nodes = {};
  }

  set(node, value) {
     node.__nodeStoreKey__ = Symbol();
    this.nodes[node.__nodeStoreKey__] = value;
  }

  get(node) {
   return this.nodes[node.__nodeStoreKey__];
  }

  has(node) {
    return !!this.nodes[node.__nodeStoreKey__];
  }
}
const element = document.createElement('p')
const store = new NodeStore();
store.set(element, "judo")
console.log(store.get(element))

/*
Use the Object as a memory.
Because object keys can contain only strings or Symbol, for 100% elimination of collisions with node properties it is better to use Symbol.
For each node, add a property with a value from Symbol and save there a serial number (or another unique id, for example, uuid)
Save the value with this id in memo.
*/