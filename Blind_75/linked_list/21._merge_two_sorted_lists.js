var mergeTwoLists = function(l1, l2) {
  let dummyHead = new ListNode();
  let cur = dummyHead;
  
  while (l1 && l2) {

      if (l1.val < l2.val) {
          cur.next = l1;
          l1 = l1.next
      } else {
          cur.next = l2;
          l2 = l2.next
      }

      cur = cur.next;
  }

  cur.next = l1 || l2;
   
  return dummyHead.next;
};

/*
Complexity Analysis

Time complexity : O(n + m)

Because exactly one of l1 and l2 is incremented on each loop iteration, the while loop runs for a number of iterations equal to the sum of the lengths of the two lists. All other work is constant, so the overall complexity is linear.

Space complexity : O(1)

The iterative approach only allocates a few pointers, so it has a constant overall memory footprint.
*/