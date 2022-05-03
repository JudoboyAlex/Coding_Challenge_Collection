// es6 symbol solution
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

// es5 solution
class NodeStore {
  constructor() {
    this.store = {};
    this.id = 1;
  }
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    const id = node.dataset.storeid || this.id++;
    this.store[id] = value;
    node.dataset.storeid = id;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    const { storeid } = node.dataset;
    return this.store[storeid];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    const { storeid } = node.dataset;
    return storeid in this.store;
  }
}

// Solution #3 solution that do not require to mutate node object(Interview Approved)
class NodeStore {
  /**
   * @param {Node} node
   * @param {any} value
   */
  store = {};
  set(node, value) {
    // Symbol.for always return same value for an object in a given runtime
    // We should ask Interviewer if mutating Node object is allowed.
    this.store[Symbol.for(node)] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.store[Symbol.for(node)];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return Boolean(this.store[Symbol.for(node)]);
  }
}