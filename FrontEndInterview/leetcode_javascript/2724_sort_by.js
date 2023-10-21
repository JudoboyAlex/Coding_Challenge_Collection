var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

/*
Complexity Analysis

Time complexity: 
O(NlogN), where N is the length of the input array. This is due to the Array.prototype.sort() method, which has a worst-case time complexity of O(NlogN) in most JavaScript engines, including V8 (used in Chrome and Node.js). The actual time complexity can also be impacted by the complexity of the comparator function (fn).

Space complexity: 
O(N), where N is the length of the input array. However, it's important to note that the actual space complexity can depend on the specific sorting algorithm used by the JavaScript engine, and this might vary across different engines. For instance, Chrome's V8 engine employs TimSort for longer arrays, which comes with a space complexity of O(N), and InsertionSort for shorter arrays, carrying a space complexity of O(1). To ensure accurate analysis, you are encouraged to check the specifics of the JavaScript engine you are utilizing.
*/
