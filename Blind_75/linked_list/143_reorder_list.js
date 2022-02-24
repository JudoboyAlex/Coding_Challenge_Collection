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

// Easier to understand solution
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    
    if (!head || !head.next) return; 
    
    // find the middle point
    let slow = head;
    let fast = head;
    
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // return slow;

    // reverse linked list
    let prev = null; 
    let cur = slow; 
    let next;
    
    while(cur) {
        next = cur.next;
        cur.next = prev;
        prev = cur;
        cur = next;
    }
    //return prev;
    
    // merge two sorted lists
    let first = head;
    let second = prev;
    
    while(second.next != null){
        next = first.next;
        first.next = second;
        first = next;
        
        next = second.next;
        second.next = first;
        second = next;
    }
    
    // return head;
};