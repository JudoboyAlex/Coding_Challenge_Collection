var reverseWords = function (s) {
  let str = s.split(" ");
  console.log("str ", str);
  let output = "";
  for (let i = str.length - 1; i >= 0; i--)
    if (str[i]) output += (output ? " " : "") + str[i];
  return output;
};

/*
Complexity Analysis

Time complexity: O(N).

Space complexity: O(N).
*/