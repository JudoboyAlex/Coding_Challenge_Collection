// My Solution
var cancellable = function (fn, args, t) {
  let timeId = setTimeout(() => {
    fn.apply(null, args);
  }, t);
  return function () {
    clearTimeout(timeId);
  };
};

/*
Complexity Analysis:
Time complexity: O(1)

Space complexity: O(1)

While the time and space complexity of the cancellable function itself is O(1), it's important to note that the time complexity 
of the function fn that is passed as an argument can have some different complexity.
*/