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

//  Time: O(n), Memory: O(n)

var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  // ([])
  for (let i = 0; i < s.length; i++) {
    let c = s[i];
    if (map[c]) {
      stack.push(map[c]);
    } else if (c !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};