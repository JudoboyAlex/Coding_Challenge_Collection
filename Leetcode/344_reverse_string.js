// Runtime: 100 ms, faster than 95.97% of JavaScript online submissions for Reverse String.
// Memory Usage: 45.8 MB, less than 43.09% of JavaScript online submissions for Reverse String.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  let counter = 1;
  for(let i = 0; i < s.length; i++){
      temp = s[s.length-counter]; 
      s[s.length-counter] = s[i];
      s[i] = temp;
      counter++;
      
      if(s.length % 2 ===0 ){
          if( i === Math.floor(s.length/2)-1){
          break;
       }
      } 
      
      if(s.length % 2 != 0 ){
          if( i === Math.floor(s.length/2)){
          break;
       }
      } 
  }
};