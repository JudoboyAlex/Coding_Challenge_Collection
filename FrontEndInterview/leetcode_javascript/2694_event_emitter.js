// My solution
class EventEmitter {
  constructor() {
    this.hash = {};
  }
  /**
   * @param {string} eventName
   * @param {Function} callback
   * @return {Object}
   */
  subscribe(eventName, callback) {
    if (this.hash[eventName]) {
      this.hash[eventName].push(callback);
    } else {
      this.hash[eventName] = [callback];
    }

    return {
      unsubscribe: () => {
        this.hash[eventName].shift();
        return this.hash[eventName];
      },
    };
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   * @return {Array}
   */
  emit(eventName, args = []) {
    let result = [];
    if (this.hash[eventName]) {
      for (let fn of this.hash[eventName]) {
        result.push(fn(...args));
      }
      return result;
    } else {
      return [];
    }
  }
}

/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() { return 99 }
 * const sub = emitter.subscribe('onClick', onClickCallback);
 *
 * emitter.emit('onClick'); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit('onClick'); // []
 */


/*
Complexity Analysis:
Time complexity: For subscribe: O(1) & For unsubscribe and emit: O(n), where n represents the number of callbacks subscribed to the event
Space complexity: O(n), where n represents the number of callbacks subscribed to the event
*/

class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(event, cb) {
    this.events[event] = this.events[event] ?? [];
    this.events[event].push(cb);

    return {
      unsubscribe: () => {
        this.events[event] = this.events[event].filter((f) => f !== cb);
        //To avoid memory leaks adding a cleanup condition
        if (this.events[event].length === 0) {
          delete this.events[event];
        }
      },
    };
  }

  emit(event, args = []) {
    if (!(event in this.events)) return [];
    return this.events[event].map((f) => f(...args));
  }
}