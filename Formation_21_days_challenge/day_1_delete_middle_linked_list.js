// Given a linked list, delete the middle node. If the list is even length, delete the node at the start of the second half of the list.
/*
 * You may assume the node class is:
 * class LLNode {
 *   constructor(value, next = null) {
 *     this.value = value;
 *     this.next = next;
 *   }
 * }
 */
class LLNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function deleteMiddleNode(head) {
  // Many linked list problems that modify the list
  // can be made simpler by temporarily inserting
  // an extra node as the head.
  let tempHead = new LLNode(Infinity, head);

  // This solution will use a slow/fast pattern. In this
  // case the fast will move twice as fast as the slow.
  let slow = tempHead;
  let fast = head?.next;

  while (fast) {
    // Slow moves ahead one.
    slow = slow.next;
    // Fast moves ahead two.
    fast = fast.next?.next;
  }

  // Now that fast has moved off the end (now is null)
  // slow is at the halfway point.

  // update the slow pointer's next to skip the node
  // after it.
  slow.next = slow.next ? slow.next.next : null;

  // Return the real head, not our temporary head.
  return tempHead.next;
}
