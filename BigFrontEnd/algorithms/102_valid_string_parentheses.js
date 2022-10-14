function validate(str) {
  // your code here
  let obj = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  let stack = [];

  for (let bracket of str) {
    if (!obj[bracket]) {
      stack.push(bracket);
    } else if (stack.pop() !== obj[bracket]) return false;
  }

  return stack.length === 0;
}

console.log(validate("{[()]}")); // true
console.log(validate("{[}]")); // false
