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
