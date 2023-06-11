function memoize(fn) {
  let cache = {};

  return function (...args) {
    let key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    cache[key] = fn.apply(this, args);
    return cache[key];
  };
}
