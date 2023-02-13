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

var middleNode = function (head) {
  let fast = (slow = head);
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

/*
Complexity Analysis

Time Complexity: O(N), where N is the number of nodes in the given list.

Space Complexity: O(1), the space used by slow and fast.
*/


// My brute force solution
var middleNode = function (head) {
  let counter = 0;
  let counterTwo = 0;
  let node = head;
  let nodeTwo = head;
  while (node != null) {
    counter++;
    node = node.next;
  }

  let mid = Math.floor(counter / 2);

  while (nodeTwo != null) {
    counterTwo++;
    nodeTwo = nodeTwo.next;
    if (counterTwo === mid) {
      return nodeTwo;
    }
  }

  return head;
};