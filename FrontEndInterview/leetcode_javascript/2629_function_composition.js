// My Solution
var compose = function (functions) {
  return function (x) {
    let y = x;
    for (let i = functions.length - 1; i >= 0; i--) { // Corrected the loop condition
      y = functions[i](y); // Corrected the function call
    }
    return y; // Return the final result, not the total
  };
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

/*
Complexity Analysis
Let N be the number of functions in the array.

Time complexity: O(N). Each of the N functions in the array is called exactly once, assuming that each function has a constant time complexity.

Space complexity: O(1). The iterative method uses a single variable input to store the intermediate results, not requiring any additional space.
*/

// Solution preserving this
const composedFn = function (x) {
  let result = x;
  for (let i = functions.length - 1; i >= 0; i--) {
    result = functions[i].call(this, result);
  }
  return result;
};

// Bad Example of not preserving this
const obj = {
  value: 1,
  increment: function() { this.value++; return this.value; },
  double: function() { this.value *= 2; return this.value; },
};

// Composing the methods without preserving `this`
const badCompose = function(functions) {
  return function(x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

const badComposedFn = badCompose([obj.increment, obj.double]);
console.log(badComposedFn(1));  // This will return NaN, because `this` is not `obj` inside `increment` and `double`