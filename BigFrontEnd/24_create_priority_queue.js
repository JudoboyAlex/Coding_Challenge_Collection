// complete the implementation
class PriorityQueue {
  /**
   * @param {(a: any, b: any) => -1 | 0 | 1} compare -
   * compare function, similar to parameter of Array.prototype.sort
   */
  constructor(compare) {
    this.compare = compare;
    this.arr = [];
  }

  /**
   * return {number} amount of items
   */
  size() {
    return this.arr.length;
  }

  /**
   * returns the head element
   */
  peek() {
    return this.arr[0];
  }

  /**
   * @param {any} element - new element to add
   */
  add(element) {
    this.arr.push(element);
    this.arr.sort(this.compare);
  }

  /**
   * remove the head element
   * @return {any} the head element
   */
  poll() {
    return this.arr.shift();
  }
}
