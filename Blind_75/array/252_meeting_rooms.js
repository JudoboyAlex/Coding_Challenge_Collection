var canAttendMeetings = function (intervals) {
  if (!intervals || intervals.length === 1) return true;

  let sorted = [...intervals].sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i][1] > sorted[i + 1][0]) return false;
  }
  return true;
};

/*
Complexity Analysis

Time complexity : O(nlogn). The time complexity is dominated by sorting. Once the array has been sorted, only O(n) time is taken to go through the array and determine if there is any overlap.

Space complexity : O(1). Since no additional space is allocated.
*/