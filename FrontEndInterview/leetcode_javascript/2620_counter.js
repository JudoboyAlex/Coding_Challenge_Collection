var createCounter = function (n) {
  let counter = n - 1;
  return function () {
    counter += 1;
    return counter;
  };
};

var createCounter2 = function (n) {
  return function () {
    return n++;
  };
};
/**
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */
