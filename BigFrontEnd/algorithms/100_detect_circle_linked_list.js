// Approach 1 - Using Set
// Time: O(n)
// Space: O(n)
function hasCircle(head) {
  const visited = new Set();
  while (head) {
    if (visited.has(head)) return true;
    visited.add(head);
    head = head.next;
  }
  return false;
}

// Approach 2 - Floyds Cycle Finding Algorithm
// Time: O(n)
// Space: O(1)
function hasCircle(head) {
  let slow = head;
  let fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;
    if (fast === slow) return true;
  }
  return false;
}
