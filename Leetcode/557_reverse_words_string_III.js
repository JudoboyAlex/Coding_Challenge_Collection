// Solution#1 Vanilla way
var reverseWords = function(s) {
    let arr = s.split(" ");
    let result = arr.map((word) => word.split("").reverse().join(""));
    return result.join(" ");
};

// Solution#2 Two-Pointers Technique
var reverseWords = function (s) {
  // 1. Split the string into an array of words
  s = s.split(" ");

  // 2. Reverse the characters in each individual word
  for (let word = 0; word < s.length; word++) {
    s[word] = reverse(s[word]);
  }

  // 3. Return the recombined string
  return s.join(" ");
};

function reverse(word) {
  // 1. Split the word into an array of characters
  word = word.split("");

  // 2. Initialize our two pointers, left and right
  for (let left = 0, right = word.length - 1; left < right; left++, right--) {
    // 3. Swap the left and right characters with the help of a temp variable
    const temp = word[left];
    word[left] = word[right];
    word[right] = temp;
    // [word[left], word[right]] = [word[right], word[left]] // modern way to swap

    // 4. Increment left and decrement right to move towards the middle of the array
    // 5. Repeat the loop while left < right
    // (The above steps are implemented in the definition of the for loop)
  }

  // 6. Join the array and return it as a string
  return word.join("");
}

// Time: O(N)
// Space: O(1)