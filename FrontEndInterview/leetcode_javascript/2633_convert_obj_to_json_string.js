var jsonStringify = function (object) {
  if (object === null) {
    return "null";
  }

  if (Array.isArray(object)) {
    const elements = object.map((element) => jsonStringify(element));
    return `[${elements.join(",")}]`;
  }

  if (typeof object === "object") {
    const keys = Object.keys(object);
    const keyValuePairs = keys.map(
      (key) => `"${key}":${jsonStringify(object[key])}`
    );
    return `{${keyValuePairs.join(",")}}`;
  }

  if (typeof object === "string") {
    return `"${object}"`;
  }

  return String(object);
};

/*
Time Complexity:

In the worst case, when the object has nested structures, such as nested objects or arrays, the time complexity is O(n), where n represents the total number of elements in the object.
Recursive calls are made for nested values, but the total number of iterations remains proportional to the size of the input object.
Space Complexity:

The space complexity is also O(n) in the worst case, where n is the total number of elements in the object.
For each level of recursion, new arrays (elements and keyValuePairs) are created to store the intermediate JSON string representations.
Thus the space required grows linearly with the depth of the recursion and the number of elements in the object.
*/

/*
Input: object = {"y":1,"x":2}
Output: {"y":1,"x":2}
Explanation: 
Return the JSON representation.
Note that the order of keys should be the same as the order returned by Object.keys().

Input: object = {"a":"str","b":-12,"c":true,"d":null}
Output: {"a":"str","b":-12,"c":true,"d":null}
Explanation:
The primitives of JSON are strings, numbers, booleans, and null.

Input: object = {"key":{"a":1,"b":[{},null,"Hello"]}}
Output: {"key":{"a":1,"b":[{},null,"Hello"]}}
Explanation:
Objects and arrays can include other objects and arrays.
*/