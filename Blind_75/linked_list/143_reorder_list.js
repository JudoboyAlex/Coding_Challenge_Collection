var reorderList = function(head) {
  if (head === null) {
    return;
  }
  /**
   * The goal is to reverse the second half of the list and merge it onto
   * the first half of the list. The first half will have at most one more
   * element than the second half.
   */
  let second = split(head);
  second = reverse(second);
  merge(head, second);
};

function split(node) {
  let fast = node;
  let slow = node;
  
  while (fast !== null) {
    if (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    } else {
      fast = null;
    }
  }
  
  const secondHalf = slow.next;
  slow.next = null;
  
  return secondHalf;
}

function reverse(node) {
  let curr = node;
  let prev = null;
  let next = null;
  
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  
  return prev;
}

function merge (l1, l2) {
  let l1Next = null;
  let l2Next = null;
  
  while(l2 !== null) {
    l1Next = l1.next;
    l2Next = l2.next;
    
    l1.next = l2;
    l2.next = l1Next;
    
    l1 = l1Next;
    l2 = l2Next;
  }
}

/*
Time complexity: O(N). There are three steps here. To identify the middle node takes O(N) time. 
To reverse the second part of the list, one needs N/2 operations. The final step, to merge two lists, 
requires N/2 operations as well. In total, that results in O(N) time complexity.

Space complexity: O(1), since we do not allocate any additional data structures.
*/