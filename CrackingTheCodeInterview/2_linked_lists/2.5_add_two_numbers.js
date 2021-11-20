// From 2. Add Two Numbers Leetcode   

function addTwoNumbers(l1, l2) {
  let head = new ListNode();
  let tail = head;
  let carry = 0;
  
  while (l1 || l2 || carry) {
      const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
      
      tail.next = new ListNode(sum % 10);
      tail = tail.next;
      
      carry = Math.trunc(sum / 10);
      
      l1 = l1 && l1.next;
      l2 = l2 && l2.next;
  }
  
  return head.next;
};