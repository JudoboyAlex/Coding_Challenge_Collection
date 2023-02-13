function memoize(callback, resolver) {
  const cache = new Map();

  function getCacheKey(args) {
    return resolver != null ? resolver(...args) : JSON.stringify(args);
  }

  const memoized = function (...args) {
    const cacheKey = getCacheKey(args);

    if (cache.has(cacheKey)) {
      return cache.get(cacheKey);
    }

    const output = callback(...args);
    cache.set(cacheKey, output);
    return output;
  };

  memoized.clear = function () {
    cache.clear();
  };

  memoized.delete = function (...args) {
    const cacheKey = getCacheKey(args);
    cache.delete(cacheKey);
  };

  memoized.has = function (...args) {
    const cacheKey = getCacheKey(args);
    return cache.has(cacheKey);
  };

  return memoized;
}

const callback = (...args) => args;
const momoized = memoize(callback);
memoized(123); // calls callback, returns 123
memoized(123); // returns 123
memoized(123, 'abc'); // calls callback, returns [123, 'abc']

const memoized2 = memoize(callback, args => args[0]);
memoized2(123); // calls callback, returns 123
memoized2(123); // returns 123
memoized2(123, 'abc'); // returns 123
memoized2('abc', 123); // calls callback, returns ['abc', 123]
memoized2('abc'); // returns ['abc', 123]