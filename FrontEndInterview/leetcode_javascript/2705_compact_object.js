// Iterative DFS
function compactObject(obj) {
  const stack = [[obj, Array.isArray(obj) ? [] : {}]];
  let newObj = stack[0][1];

  while (stack.length > 0) {
    const [currObj, newCurrObj] = stack.pop();

    for (const key in currObj) {
      const val = currObj[key];

      if (!val) continue;

      if (typeof val !== "object") {
        Array.isArray(newCurrObj)
          ? newCurrObj.push(val)
          : (newCurrObj[key] = val);
        continue;
      }

      const newSubObj = Array.isArray(val) ? [] : {};
      Array.isArray(newCurrObj)
        ? newCurrObj.push(newSubObj)
        : (newCurrObj[key] = newSubObj);
      stack.push([val, newSubObj]);
    }
  }

  return newObj;
}
/*
Complexity Analysis
Time complexity: O(N), where N is the total number of keys (or indices, in the case of arrays) in the input object and all nested objects/arrays. This is because we're processing each key or index exactly once.

Space complexity: O(N), where N is the same as above. The space is primarily used for the stack, which in the worst case stores all the nested objects and arrays at once. There's also some additional space used for the copy of the input object, but this does not change the overall O(N) space complexity.
*/

// Recursion DFS
var compactObject = function (obj) {
  function dfs(obj) {
    if (!obj) return false;
    if (typeof obj !== "object") return obj;

    if (Array.isArray(obj)) {
      const newArr = [];
      for (let i = 0; i < obj.length; i++) {
        const curr = obj[i];
        const subRes = dfs(curr);

        if (subRes) {
          newArr.push(subRes);
        }
      }

      return newArr;
    }

    const newObj = {};

    for (const key in obj) {
      const subRes = dfs(obj[key]);
      if (subRes) {
        newObj[key] = subRes;
      }
    }

    return newObj;
  }

  return dfs(obj);
};
/*
Complexity Analysis
Time complexity: O(N), where N is the total number of elements in the object (including nested elements). The function traverses through each element in the object exactly once, which includes going through each nested object or array. Therefore, the time complexity is linear in terms of the total number of elements.

Space complexity: O(D), where D is the depth of the object. The additional space is used by the call stack during the recursive calls. In the worst case, the depth of the recursion is equal to the depth of the object, hence the space complexity is proportional to the depth of the object. This assumes that object keys and array elements are not counted in the space complexity, as they are part of the input. If you were to include them, the space complexity could be considered O(N), similar to the time complexity.
*/