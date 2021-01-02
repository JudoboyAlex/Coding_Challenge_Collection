/*
Runtime: 88 ms, faster than 81.09% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 40.6 MB, less than 30.07% of JavaScript online submissions for Merge Two Sorted Lists.
*/

var mergeTwoLists = function (l1, l2) {
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

//[3,4] = mergeTwoLists([1,2,4], [3,4])
//[2,4] = mergeTwoLists([2,4], [1,3,4])
//[3,4] = mergeTwoLists([2,4], [3,4])
//[4] = mergeTwoLists([4], [3,4])
//[4] = mergeTwoLists([4], [4]);
//null = mergeTwoLists([4], null);

/*
Runtime: 76 ms, faster than 99.42% of JavaScript online submissions for Merge Two Sorted Lists.
Memory Usage: 40.5 MB, less than 30.07% of JavaScript online submissions for Merge Two Sorted Lists.
*/
var mergeTwoLists = function(l1, l2) {
  let list = new ListNode()
  let head = list
  
  while (l1 !== null && l2 !== null) {

  // Select the smallest value from either linked list,
  // then increment that list forward.
      if (l1.val < l2.val) {
          list.next = new ListNode(l1.val)
          l1 = l1.next
      } else {
          list.next = new ListNode(l2.val)
          l2 = l2.next
      }
      
      list = list.next
  }
  
// It's possible that one linked list is shorter than the other so we just
// add on the remainder of the last linked list. It's already sorted :)
  if (l1 !== null)
      list.next = l1
  if (l2 !== null)
      list.next = l2
  
// return .next because this first element in the linkedlist is empty
  return head.next
};