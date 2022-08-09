/**
 * @param {string} input
 * @returns string
 */
function removeChars(input) {
  let stack = [];
  for (let word of input) {
    if (stack.length && word === "c" && stack[stack.length - 1] === "a") {
      stack.pop();
    } else if (word !== "b") {
      stack.push(word);
    }
  }
  return stack.join("");
}

console.log(removeChars("ab")); // "a"
console.log(removeChars("abc")); // " "
console.log(removeChars("cabbaabcca")); // "caa"
