var insert = function(intervals, newInterval) {
  let size = intervals.length;
  let index = 0;
  let res = [];
  
  while(index < size && intervals[index][1] < newInterval[0]) {
      res.push(intervals[index]);
      index++;
  }
  // merging
  while(index < size && intervals[index][0] <= newInterval[1]) {
      newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
      index++;
  }
  res.push(newInterval);

  while(index < size) {
      res.push(intervals[index]);
      index++;
  }
  return res;
}

// console.log(insert([ [1,3],[6,9] ], [2,5]))
console.log(insert([ [1,2],[3,5],[6,7],[8,10],[12,16] ], [4,8]))

// Runtime: 133 ms, faster than 19.08% of JavaScript online submissions for Insert Interval.
// Memory Usage: 40.6 MB, less than 91.81% of JavaScript online submissions for Insert Interval.