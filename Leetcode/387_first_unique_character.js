/*
Runtime: 116 ms, faster than 62.19% of JavaScript online submissions for First Unique Character in a String.
Memory Usage: 47 MB, less than 7.95% of JavaScript online submissions for First Unique Character in a String.
*/
var firstUniqChar = function(s) {
  let arr = s.split("");
  let cache = {};
  for( word of arr){
    cache[word] = (cache[word] || 0) + 1;
  }
  for( i in cache){
    if(cache[i] === 1){
      return arr.indexOf(i);
    }
  }
  return -1;
};


/*
Runtime: 108 ms, faster than 81.30% of JavaScript online submissions for First Unique Character in a String.
Memory Usage: 42.4 MB, less than 58.31% of JavaScript online submissions for First Unique Character in a String.
*/

var firstUniqChar = function(s) {
  for(i=0;i<s.length;i++){
      if (s.indexOf(s[i])===s.lastIndexOf(s[i])){
         return i;
     } 
  }
  return -1;
};
