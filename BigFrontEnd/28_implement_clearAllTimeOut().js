const originalSetTimeout = window.setTimeout;
let timeoutIds = [];

window.setTimeout = (callback, delay) => {
  const timerId = originalSetTimeout(callback, delay);
  timeoutIds.push(timerId);
  return timerId;
};

const clearAllTimeout = () => {
  timeoutIds.forEach((id) => window.clearTimeout(id));
};


// Alternative, but not good solution
function clearAllTimeout() {
  // your code here
  let id = setTimeout(null, 0);
  while (id >= 0) {
    window.clearTimeout(id);
    id--;
  }
}

setTimeout(func1, 10000);
setTimeout(func2, 10000);
setTimeout(func3, 10000);

// all 3 functions are scheduled 10 seconds later
clearAllTimeout();

// all scheduled tasks are cancelled.
