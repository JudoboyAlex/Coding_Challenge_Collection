class EventTarget {
  // Write your code here.
  constructor() {
    this.listeners = {};
  }

  addEventListener(name, callback) {
    // Write your code here.
    //console.log(!(name in this.listeners));
    if (!this.listeners.hasOwnProperty(name)) {
      this.listeners[name] = new Set([callback]);
    } else {
      this.listeners[name].add(callback);
    }
  }

  removeEventListener(name, callback) {
    // Write your code here.
    this.listeners[name]?.delete(callback);
  }

  dispatchEvent(name) {
    // Write your code here.
    this.listeners[name]?.forEach((cb) => {
      cb();
    });
  }
}

const target = new EventTarget();
const logHello = () => console.log("hello");
const logWorld = () => console.log("world");

target.addEventListener("hello", logHello);
target.addEventListener("world", logWorld);

target.dispatchEvent("hello");
target.dispatchEvent("world");

target.removeEventListener("hello", logHello);

target.dispatchEvent("hello");
target.dispatchEvent("world");