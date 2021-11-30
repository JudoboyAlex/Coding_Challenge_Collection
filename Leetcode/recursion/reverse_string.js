// reverse string using recursion with O(1) memory space
var reverseString = function(s) {

  function helper(start, end, s) {
    if (start >= end) {
      return;
    } 

    let tmp = s[start];
    s[start] = s[end];
    s[end] = tmp;
     
    helper(start + 1, end - 1, s);
 }
  
  helper(0, s.length-1, s);
};

// reverse string with O(n) memory space
const reverseString= (str) => {
  if(str.length === 1) return str;

  return reverseString(str.slice(1)) + str[0];
}