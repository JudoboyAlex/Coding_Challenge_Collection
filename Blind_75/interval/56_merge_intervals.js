var merge = function(intervals) {
  if(intervals.length < 2) return intervals; 
  intervals.sort((a,b) => a[0] - b[0]) //Arr have smaller element come first
  for(let i = 1; i < intervals.length; i += 1){
      curr = intervals[i];
      prev = intervals[i-1];
      if(curr[0] <= prev[1]){
          intervals[i] = [Math.min(prev[0],curr[0]), Math.max(prev[1],curr[1])]
          intervals.splice(i-1,1);
          i -= 1  // After merge, the arr become shorter
      }
  }
  return intervals
};

// console.log(merge([[1,3],[2,6],[8,10],[15,18]]))
// console.log(merge([[1,4],[0,2],[3,5]])) // [[0,5]]
console.log(merge([[0,2],[1,4],[3,5]])) // [[0,5]]
/*
Complexity Analysis

Time complexity : O(n\log{}n)O(nlogn)

Other than the sort invocation, we do a simple linear scan of the list, 
so the runtime is dominated by the O(n\log{}n)O(nlogn) complexity of sorting.

Space complexity : O(\log N)O(logN) (or O(n)O(n))

If we can sort intervals in place, we do not need more than constant additional space, 
although the sorting itself takes O(\log n)O(logn) space. 
Otherwise, we must allocate linear space to store a copy of intervals and sort that.
*/