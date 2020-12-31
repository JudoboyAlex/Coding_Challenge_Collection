//My Solution
/*
Runtime: 112 ms, faster than 33.57% of JavaScript online submissions for Valid Anagram.
Memory Usage: 44.1 MB, less than 33.41% of JavaScript online submissions for Valid Anagram.
*/

var isAnagram = function(s, t) {
  let arrS = s.split("").sort();
  let arrT = t.split("").sort();
  
  if(arrS.length != arrT.length){
      return false;
  } 

  for(let i =0; i < arrS.length; i++){
     
      if(arrS[i] != arrT[i]){
          return false;
      }
  }
   return true;
};

/*
Runtime: 92 ms, faster than 80.31% of JavaScript online submissions for Valid Anagram.
Memory Usage: 41.2 MB, less than 54.38% of JavaScript online submissions for Valid Anagram.
*/

function isAnagram(s, t) {
	const map = {};
	s.split('').map(c => map[c] = map[c] ? map[c] + 1 : 1);
	t.split('').map(c => map[c] = map[c] ? map[c] - 1 : -1);
	return Object.keys(map).every(k => map[k] === 0);
}