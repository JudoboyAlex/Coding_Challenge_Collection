/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// leetcode solution
var detectCycle = function (head) {
  if (!head || !head.next) return null;

  var slow = (fast = head);

  slow = slow.next;
  fast = fast.next.next;

  while (slow !== fast) {
    if (!slow.next || !fast.next || !fast.next.next) return null;
    slow = slow.next;
    fast = fast.next.next;
  }

  fast = head;

  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
};

/*
Time Complexity#
As we know, finding the cycle in a LinkedList with ‘N’ nodes and also 
finding the length of the cycle requires O(N). 
Also, as we saw in the above algorithm, we will need O(N) to find the start of the cycle. 
Therefore, the overall time complexity of our algorithm will be O(N).

Space Complexity#
The algorithm runs in constant space O(1).
*/