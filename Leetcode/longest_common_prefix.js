// Unable to Solve
// Runtime: 92 ms, faster than 35.61% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 40.2 MB, less than 29.77% of JavaScript online submissions for Longest Common Prefix.

var longestCommonPrefix = function(strs) {
  if (!strs.length){
    return ""
  } 
  let word = strs[0];
  let res = "";
  for (let i = 0; i < word.length; i++) {
      let pre = word.slice(0, i+1);
      if (strs.every(w => w.startsWith(pre))){
        console.log(pre);
        
        res = pre;
      } 
      else break;
  }
  return res;
};


console.log(longestCommonPrefix(["flower","flow","flight"]))

// Better Solution
// Runtime: 80 ms, faster than 85.73% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 39.9 MB, less than 38.78% of JavaScript online submissions for Longest Common Prefix.
var longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  
  let prefixLength = 0;
  
masterLoop:
  while (true) {
      const char = strs[0][prefixLength];
      if (!char) break masterLoop;
      for (let x = 1; x < strs.length; x++) {
          const testChar = strs[x][prefixLength];
          if (testChar != char) {
              break masterLoop;      
          }
      }
      prefixLength++;
  }
  return strs[0].slice(0, prefixLength);
};