// My Solution
var removeStars = function (s) {
  let stars = s.split("");
  let stack = [];
  for (let i = 0; i < stars.length; i++) {
    if (stars[i] != "*") {
      stack.push(stars[i]);
    } else {
      stack.pop();
    }
  }
  return stack.join("");
};

/*
Complexity Analysis
Here, nnn is the length of s.

Time complexity: O(n)

We iterate over s and for every character we either push it in the stack or pop the top character from the stack which takes O(1) time per character. It takes O(n) time for nnn characters.
To form the answer string, we remove all the characters from the stack. 
Because a stack can have maximum of nnn characters, 
it would also take O(n) time in that case.
We also require O(n) time to reverse answer which can have nnn characters.
Space complexity: O(n)

The stack used in the solution can grow to a maximum size of n. 
We would need O(n) space in that case.
*/