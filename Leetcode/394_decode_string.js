/*Traversal the string s and push into a stack for non-] character
When we meets the ] character, we should do these steps
pop all characters until meets [
pop all numbers to get the repeat count
repeat the substring and push it back to stack
Finally, we join all the pieces in the stack*/

const decodeString = (s) => {
  const stack = [];
  for (const char of s) {
    if (char !== "]") {
      stack.push(char);
      continue;
    }
    let cur = stack.pop();
    let str = "";
    while (cur !== "[") {
      str = cur + str;
      cur = stack.pop();
    }
    let num = "";
    cur = stack.pop();
    while (!Number.isNaN(Number(cur))) {
      num = cur + num;
      cur = stack.pop();
    }
    stack.push(cur);
    stack.push(str.repeat(Number(num)));
  }
  return stack.join("");
};

/*
Complexity Analysis

Time Complexity: O(maxKcountK⋅n)
Space Complexity: O(sum(maxKcountK⋅n))
*/