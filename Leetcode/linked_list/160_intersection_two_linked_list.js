var getIntersectionNode = function (headA, headB) {
  let nodeA = headA;
  let nodeB = headB;

  while (nodeA != nodeB) {
    nodeA = nodeA == null ? headB : nodeA.next;
    nodeB = nodeB == null ? headA : nodeB.next;
  }

  return nodeA;
};

// [4,1,8,4,5]
// [5,6,1,8,4,5]
/*
Complexity Analysis

Let NNN be the length of list A and MMM be the length of list B.

Time complexity : O(N+M).

In the worst case, each list is traversed twice giving 2⋅M+2⋅N2, which is equivalent to O(N+M)O(N + M)O(N+M). This is because the pointers firstly go down each list so that they can be "lined up" and then in the second iteration, the intersection node is searched for.

An interesting observation you might have made is that when the lists are of the same length, this algorithm only traverses each list once. This is because the pointers are already "lined up" from the start, so the additional pass is unnecessary.

Space complexity : O(1).

We aren't allocating any additional data structures, so the amount of extra space used does not grow with the size of the input. For this reason, Approach 3 is better than Approach 2.
*/