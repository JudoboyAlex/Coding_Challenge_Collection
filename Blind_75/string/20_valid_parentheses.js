var isValid = function(s) {
  const stack = [];
  const complement = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let char of s) {
    if (!complement[char]) stack.push(char);
    else if (stack.pop() !== complement[char]) return false;
  }
  return stack.length === 0;
};

console.log(isValid("([)]"))
console.log(isValid("()[]{}"))
console.log(isValid("{[]}"))