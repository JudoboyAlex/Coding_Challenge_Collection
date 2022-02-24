var removeNthFromEnd = function(head, n) {
  let hare = head, curr = head;
  while (n > 0) {
      hare = hare.next;
      n--;
  }
  while (hare && hare.next) {
      curr = curr.next;
      hare = hare.next;
  }

  if (!hare) {
      head = head.next;
  } else {
      curr.next = curr.next ? curr.next.next : null;
  }
  return head;
};

// Easier to understand solution
var removeNthFromEnd = function (head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;
  let fast = head;
  let slow = dummy;

  while (n > 0) {
    fast = fast.next;
    n--;
  }

  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }

  slow.next = slow.next.next;
  return dummy.next;
};

// Time O(L) The algorithm makes two traversal of the list, 
// first to calculate list length LL and second to find the (L - n)th node. 
// There are 2L-n2L−n operations and time complexity is O(L).

// Space O(1)