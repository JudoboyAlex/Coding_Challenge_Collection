var backspaceCompare = function (s, t) {
  const process = (str) => {
    const arr = [];
    for (x of str.split("")) {
      x === "#" ? arr.pop() : arr.push(x);
    }
    return arr.join("");
  };
  return process(s) === process(t);
};

/*
Complexity Analysis

Time Complexity: O(M+N), where M and N are the lengths of S and T respectively.

Space Complexity: O(M+N).
*/