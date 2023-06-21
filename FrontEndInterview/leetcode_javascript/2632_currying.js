// Recursion Solution#1
var curry = function (fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return function (...args2) {
        return curried(...args, ...args2);
      };
    }
    return fn(...args);
  };
};

// Recursion Solution#2
var curry = function (fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }

    return (...nextArgs) => curried(...args, ...nextArgs);
  };
};
/*
Complexity Analysis
Let N be the number of arguments in the original function.

Time complexity: O(N). The algorithm creates a chain of functions with a depth proportional to the number of arguments.

Space complexity: O(N). The algorithm uses memory to store intermediate functions and arguments, which grows with the number of arguments in the original function.
*/

/*
Input:
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[1,2],[3]]
Output: 6
Explanation:
curriedSum(1, 2)(3) should return the same value as sum(1, 2, 3).
*/

/*
Input:
fn = function sum(a, b, c) { return a + b + c; }
inputs = [[],[],[1,2,3]]
Output: 6
Explanation:
You should be able to pass the parameters in any way, including all at once or none at all.
curriedSum()()(1, 2, 3) should return the same value as sum(1, 2, 3).
*/