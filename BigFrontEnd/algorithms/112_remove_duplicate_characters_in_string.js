function smallestUniqueSubstr(str) {
  const stack = [];
  const inStack = new Set();
  const lastIndex = new Map();
  for (let i = 0; i < str.length; i++) {
    lastIndex.set(str[i], i);
  }
  for (let i = 0; i < str.length; i++) {
    while (
      str[i] < stack[stack.length - 1] &&
      lastIndex.get(stack[stack.length - 1]) > i
    ) {
      inStack.delete(stack.pop());
    }
    if (!inStack.has(str[i])) {
      stack.push(str[i]);
      inStack.add(str[i]);
    }
  }
  return stack.join("");
}
console.log(smallestUniqueSubstr("aabc"));
