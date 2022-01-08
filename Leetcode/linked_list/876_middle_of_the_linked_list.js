// My Solution
var middleNode = function(head) {
  let current = head;
  let arr = [];
  while(current){
      arr.push(current.val)
      current = current.next;
  }
  let mid = Math.floor(arr.length/2)
  current = head;
  while(mid>0){
      current=current.next;
      mid--;
  }
  return current;
};

// Time Complexity : O(N)
// Space Complexity: O(N)

/*
initial state
f
1 -> 2 -> 3 -> 4 -> 5
s

1st loop
		  f
1 -> 2 -> 3 -> 4 -> 5
     s
	 
2nd loop
		            f
1 -> 2 -> 3 -> 4 -> 5
          s

when f reach end of the linked list, s will be at the middle.

f = fast pointer
s = slow pointer
*/

var middleNode = function(head) {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
      fast = fast.next.next;
      slow = slow.next;
  }
  return slow;
};
// Time Complexity : O(N)
// Space Complexity: O(1)