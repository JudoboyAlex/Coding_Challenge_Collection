/**
 * @param {Function} func
 * @param {(args:[]) => string }  [resolver] - cache key generator
 */
 function memo(func, resolver) {
  const cache = {};
  
  return function (...args) {
    const key = resolver ? resolver(...args) : args.join('_');
    if (!cache[key]) {
      cache[key] = func.apply(this, args);
    }  
    return cache[key];
  };
}

// Solution #2
function memo(func, resolver = (...args) => args.join("_")) {
  const cache = new Map();

  return function (...args) {
    const cacheKey = resolver(...args);
    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }
    const value = func.apply(this, args);
    cache.set(cacheKey, value);
    return value;
  };
}