var solution = function (isBadVersion) {
  return function (n) {
    // binary search
    var start = 0,
      end = n;
    while (start < end) {
      var mid = Math.floor((start + end) / 2);
      if (isBadVersion(mid)) {
        end = mid; // look on left side of mid
      } else {
        start = mid + 1; // look on the right side of mid
      }
    }
    return start;
  };
};
/*
Complexity analysis

Time complexity : O(logN). The search space is halved each time, so the time complexity is O(\log n)O(logn).

Space complexity : O(1).
*/
