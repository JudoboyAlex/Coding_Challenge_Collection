// From --> https://www.notion.so/Front-End-Preparation-a0ac842415a04ddf9319718ea6ba22a4
const memo = (function () {
  const cache = {};
  function _cache(fn) {
    return function () {
      const key = JSON.stringify(arguments);
      if (cache[key]) {
        console.log("Cached value is used");
        return cache[key];
      } else {
        cache[key] = fn.apply(this, arguments);
        return cache[key];
      }
    };
  }
  return (fn) => _cache(fn);
})();

const fib = memo((n) => (n < 2 ? 1 : fib(n - 2) + fib(n - 1)));
console.log(fib(100));
console.log("Next call");
console.log(fib(100));
