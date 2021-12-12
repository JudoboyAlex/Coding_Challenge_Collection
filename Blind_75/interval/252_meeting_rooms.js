// My Solution
var canAttendMeetings = function(intervals) {
  intervals.sort((a,b) => a[0] - b[1] )
  for(let i = 0; i < intervals.length-1; i++){
      if(intervals[i][1] > intervals[i+1][0]){
          return false;
      }
  }
  return true;
};

// Time: O(n Log n)) due to sorting
// The time complexity is dominated by sorting. Once the array has been sorted, 
// only O(n)O(n) time is taken to go through the array and determine if there is any overlap.

// Alternative Solution                                               
var canAttendMeetings = function(intervals) {
  intervals.sort((a, b) => a.start - b.start);
  
  // can't attend if the next meeting starts before the previous ends
  for (let i = 1; i < intervals.length; i++)
      if (intervals[i].start < intervals[i-1].end) return false;
      
  return true;
};