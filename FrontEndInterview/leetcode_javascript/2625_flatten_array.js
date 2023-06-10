// Solution 1: recursion solution
var flat = function (arr, n) {
  let res = [];
  const flattening = (nums, l) => {
    for (const num of nums) {
      if (Array.isArray(num) && l > 0) {
        flattening(num, l - 1);
      } else {
        res.push(num);
      }
    }
  };

  flattening(arr, n);
  return res;
};

/*
Time complexity:

In the worst-case scenario, where every element in arr is an array and the maximum depth n is reached, the recursive function will be called for each nested array at each level.
This results in a total of O(k*n) recursive calls, where k represents the average number of nested arrays at each level, and n is the maximum depth level.
Space complexity:

The space complexity of the solution is determined by the depth level n since it affects the maximum depth of recursion.
Each recursive call consumes additional space on the call stack. Therefore, the space complexity is O(n) as we need space for n recursive calls on the call stack.
*/

// Solution 2: Using Iterative Queue
var flat = function (arr, n) {
  let nestedArrayElement = true;
  let queue;
  let depth = 0;

  while (nestedArrayElement && depth < n) {
    nestedArrayElement = false;
    queue = [];

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        queue.push(...arr[i]);
        nestedArrayElement = true;
      } else {
        queue.push(arr[i]);
      }
    }
    arr = [...queue];
    depth++;
  }

  return arr;
};

/*
Complexity Analysis:

Time Complexity:

The time complexity is O(n * m), where n is the maximum depth level and m is the total number of items in the array. We iterate through all the items in the array for each level, resulting in a total complexity of O(n * m).
Space Complexity:

The space complexity is O(m) as we use an extra queue to store the items in the array.
*/

// Solution 3: Using Iterative Stack
var flat = function (arr, n) {
  const stack = [...arr.map((item) => [item, n])];
  const res = [];

  while (stack.length > 0) {
    const [item, depth] = stack.pop();
    if (Array.isArray(item) && depth > 0) {
      // push back with depth - 1
      stack.push(...item.map((el) => [el, depth - 1]));
    } else {
      res.push(item);
    }
  }

  return res.reverse();
};

/*
Complexity Analysis:
Time complexity:

The code involves a while loop that continues until the stack becomes empty, and within each iteration, elements are popped from the stack and processed.
In the worst case scenario, each element is processed exactly once, which requires iterating over the elements of the input array and mapping them to pairs for the stack.
Therefore, the time complexity of the code is O(m), where m is the total number of elements in the input array.
Space complexity:

The space complexity of the code is O(m), where m is the total number of elements in the input array.
*/
