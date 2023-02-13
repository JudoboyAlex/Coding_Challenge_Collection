var findBuildings = function (heights) {
  const stack = [];
  for (let i = 0; i < heights.length; i++) {
    while (stack.length && heights[i] >= heights[stack[stack.length - 1]]) {
      stack.pop();
    }
    stack.push(i);
    console.log(stack);
  }
  return stack;
};

// Time: O(n), Space: O(1)
