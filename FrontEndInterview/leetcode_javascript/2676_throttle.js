var throttle = function (fn, t) {
  let lastArgs;
  let shouldCall = true;

  function execute() {
    if (shouldCall && lastArgs) {
      fn(...lastArgs);
      lastArgs = null;
      shouldCall = false;
      setTimeout(() => {
        shouldCall = true;
        execute();
      }, t);
    }
  }

  return function (...args) {
    lastArgs = args;
    execute();
  };
};
/**
 * const throttled = throttle(console.log, 100);
 * throttled("log"); // logged immediately.
 * throttled("log"); // logged at t=100ms.
 */

// Date.now solution
var throttle = function (fn, t) {
  let timeout = null;
  let nextTimeToCallFn = 0;
  return function (...args) {
    const delay = Math.max(0, nextTimeToCallFn - Date.now());
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn(...args);
      nextTimeToCallFn = Date.now() + t;
    }, delay);
  };
};