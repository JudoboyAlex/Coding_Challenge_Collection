function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(2, 3, 5));

function curry(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

const curriedSum = curry(sum);
console.log(curriedSum(2)(3)(5)); // 10

const add2 = curriedSum(2);
const add3 = add2(3);
const add5 = add3(5);
console.log(add5); // 10
