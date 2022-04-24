function debounce(func, wait, option = { leading: false, trailing: true }) {
  let timer = null;
  return function () {
    let isInvoked = false;
    
    if (timer == null && option.leading) {
     
      func.apply(this, arguments);
      isInvoked = true;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
     
      if (option.trailing && !isInvoked) {
        func.apply(this, arguments);
      }
      timer = null;
    }, wait);
  };
}

// Solution #2
function debounce(func, wait, option = { leading: false, trailing: true }) {
  // in basic debounce, we kept only timerId
  // here, we will keep lastArgs too as we trailing function call with last arguments
  let timerId = null;
  let lastArgs = null;

  // if both leading and trailing are false then do nothing.
  if (!option.leading && !option.trailing) return () => null;

  return function debounced(...args) {
    // if timer is over and leading is true
    // then immediately call supplied function
    // else capture arguments in lastArgs
    if (!timerId && option.leading) {
      func.apply(this, args);
    } else {
      lastArgs = args;
    }

    // clear timer so that next call is exactly after `wait` time
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      // invoke only if lastArgs is present and trailing is true
      if (option.trailing && lastArgs) func.apply(this, lastArgs);

      // reset variables as they need to restart new life after calling this function
      lastArgs = null;
      timerId = null;
    }, wait);
  };
}