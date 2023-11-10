String.prototype.replicate = function (times) {
  let str = "";
  for (let i = 0; i < times; i++) {
    str += this;
  }
  return str;
};

/*
Example 1:

Input: str = "hello", times = 2
Output: "hellohello"
Explanation: "hello" is repeated 2 times
Example 2:

Input: str = "code", times = 3
Output: "codecodecode"
Explanation: "code" is repeated 3 times
Example 3:

Input: str = "js", times = 1
Output: "js"
Explanation: "js" is repeated 1 time

Complexity Analysis:
Time complexity: The iterative concatenation approach involves a series of growing concatenation operations.

In the first iteration, you concatenate the original string (of length m) to the result. This operation is O(m)O(m)O(m).
In the second iteration, the result string is of length m, and you concatenate another string of length m to it. This operation is O(2m)O(2m)O(2m).
In the third iteration, it's O(3m)O(3m)O(3m), and the pattern continues in this manner. Thus summing up the time taken for each iteration: O(m+2m+3m+...+nm)O(m + 2m + 3m + ... + nm)O(m+2m+3m+...+nm)
Given the properties of big O notation where we focus on the term that grows the fastest, this can be approximated as: O(m∗n2)O(m * n^2)O(m∗n 
2
 )
Space complexity: The space complexity primarily stems from the continuously growing result string. At the end of all iterations, the length of the result string is m * n, making the space complexity O(m∗n)O(m * n)O(m∗n).
*/
