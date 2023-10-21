// My Solution
var isEmpty = function (obj) {
  if (Array.isArray(obj) && obj.length > 0) {
    return false;
  }
  if (Object.keys(obj).length === 0) {
    return true;
  }
  return false;
};

// For Loop Solution
var isEmpty = function (obj) {
  for (const _ in obj) return false;
  return true;
};

/*
Complexity Analysis:
The time and space is O(1) because we are just checking if we can enter the loop or not.

Time complexity: O(1)

Space complexity: O(1)
*/