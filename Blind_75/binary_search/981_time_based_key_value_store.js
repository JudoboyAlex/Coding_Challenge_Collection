class TimeMap {
  constructor() {
    // O(1)
    this.map = new Map(); // SC: O(T)
  }
  set(key, value, timestamp) {
    // O(1)
    const keyVals = this.map.has(key) ? this.map.get(key) : [];
    keyVals.push([timestamp, value]);
    this.map.set(key, keyVals);
  }
  get(key, timestamp) {
    // O(logT)
    const keyTimestamps = this.map.has(key) ? this.map.get(key) : [];
    let left = 0,
      right = keyTimestamps.length - 1,
      mid,
      ts = null;

    // using binary search to find the ts <= timestamp
    while (left <= right) {
      mid = left + Math.floor((right - left) / 2);
      if (keyTimestamps[mid][0] <= timestamp) {
        ts = keyTimestamps[mid][1];
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    return ts === null ? "" : ts;
  }
}
/*
Complexity Analysis
If M is the number of set function calls, N is the number of get function calls, and L is average length of key and value strings.

Time complexity:

In the set() function, in each call, we push a (timestamp, value) pair in the key bucket, which takes O(L) time to hash the string. Thus, for M calls overall it will take, $O(M \cdot L)$ time.

In the get() function, we use binary search on the key's bucket which can have at most M elements and to hash the string it takes O(L) time, thus overall it will take O(L⋅logM) time for binary search.
And, for N calls overall it will take, $O(N \cdot L \cdot logM)$ time.

Space complexity:

In the set() function, in each call we store one value string of length L, which takes O(L)space.
Thus, for M calls we may store M unique values, so overall it may take O(M⋅L) space.

In the get() function, we are not using any additional space.
Thus, for all N calls it is a constant space operation.
*/