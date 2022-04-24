const throttle = (func, wait, options = { leading: true, trailing: true }) => {
  let timer = null;
  let lastContext = null;
  let lastArgs = null;
  return function (...args) {
    // 1. if called within cool time, then store it for later call
    if (timer !== null) {
      lastContext = this;
      lastArgs = args;
      return;
    }

    // 2. if other than cool time, execute it
    if (options.leading !== false) {
      func.call(this, ...args);
    } else {
      // save for trailing call if needed
      lastContext = this;
      lastArgs = args;
    }

    // 3. set a timeout to clear the cool, time
    // and run the stored context
    const timeup = () => {
      if (options.trailing !== false && lastArgs !== null) {
        func.call(lastContext, ...lastArgs);
        lastContext = null;
        lastArgs = null;
        timer = setTimeout(timeup, wait);
      } else {
        timer = null;
      }
    };

    timer = setTimeout(timeup, wait);
  };
};
