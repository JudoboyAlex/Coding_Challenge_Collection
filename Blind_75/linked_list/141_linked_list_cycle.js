// tortoise and hare algorithm(floyd's )
var hasCycle = function(head) {
  let slow = head, fast = head;
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
    if (slow === fast) {
      return true; // found the cycle
    }
  }
  return false;
};

// Runtime: O(n)
// Space Complexity: O(1)