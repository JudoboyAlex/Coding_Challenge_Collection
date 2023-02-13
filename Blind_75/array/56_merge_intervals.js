var merge = function (intervals) {
  if (!intervals.length) return [];
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]]; 

  for (let [start, end] of intervals) {
    const endPrev = result[result.length - 1][1]; 
    if (start <= endPrev) result[result.length - 1][1] = Math.max(end, endPrev);
    else result.push([start, end]);
  }
  return result;
};

/*
Complexity Analysis

Time complexity : O(nlogn)

Other than the sort invocation, we do a simple linear scan of the list, so the runtime is dominated by the O(nlogn) complexity of sorting.

Space complexity : O(logN) or O(n)

If we can sort intervals in place, we do not need more than constant additional space, although the sorting itself takes O(logn) space. Otherwise, we must allocate linear space to store a copy of intervals and sort that.
*/