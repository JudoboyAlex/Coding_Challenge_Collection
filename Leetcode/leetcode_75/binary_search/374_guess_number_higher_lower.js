var guessNumber = function (n) {
  let l = 0,
    r = n - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let res = guess(mid);
    if (res == 0) return mid;
    else if (res == 1) l = mid + 1;
    else r = mid - 1;
  }
  return l;
};

/*
Complexity Analysis

Time complexity : 
O(log⁡2n). Binary Search is used.
Space complexity : 
O(1)O(1)O(1). No extra space is used.
*/