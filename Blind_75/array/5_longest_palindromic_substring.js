var longestPalindrome = function(s) {
  let res = "";
  let cur = "";
  for(let i = 0; i < s.length; i ++){
      for(let j = i; j < i + 2; j ++){
          let left = i;
          let right = j;
          while(s[left] && s[left] === s[right]){
              cur = s.substring(left, right + 1);
              if(cur.length > res.length) res = cur;
              left --;
              right ++;
          }
      }
  }
  return res;
};

console.log(longestPalindrome("babad")) // bab
console.log(longestPalindrome("cbbd")) // bb
/*
output - longest palindrome substring
input - string
constraints - ?? this will probably be n^2 runtime, 
- one runthrough to find a palindrome and another to find it at each index
edge cases -
- palindrome can have 1 middle character or 2 middle characters
- we'll have to calculate both at each index

we'll find palindromes starting from the "middle" index,
using the findLongestFromIndex function

we'll have one iteration to get the longest palindromes at each index,
the other iteration to actually find the palindrome

after calculating the two palindromes, we'll take the longer
and compare it to the current longest

at the end, return the longest palindrome
*/
var longestPalindrome = function(s) {
    let longest = '';
    
    // this function finds the longest palindrome using the index as the middle
    const findLongestFromIndex = (str, i, j) => {
        let palindrome = '';
        while (i >= 0 && j < str.length && str[i] === str[j]) {
            palindrome = str.slice(i, j + 1);
            i--;
            j++;
        }
        return palindrome;
    }
    
    for (let i = 0; i < s.length; i++) {
		// palindromes using one and two characters as the middle
        const palindrome1 = findLongestFromIndex(s, i, i);
        const palindrome2 = findLongestFromIndex(s, i, i + 1);
        const longerPalindrome = palindrome1.length > palindrome2.length ? palindrome1 : palindrome2;
        
        if (longerPalindrome.length > longest.length) {
            longest = longerPalindrome;
        }
    }
    
    return longest;
};
