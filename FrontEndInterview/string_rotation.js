// Solution #1
function stringRotation(str1, str2) {
  if(str1.length !== str2.length) {
      return false;
  }

  for(let i = 0; i < str1.length; i++) {
      const rotation = str1.slice(i, str1.length) + str1.slice(0, i);
      
      if(rotation === str2) {
          return true;
      }
  }
  
  return false;
}
// Time: O(N^2), Space: O(N)

// Solution #2
function stringRotation(str1, str2) {
  return str1.length === str2.length && (str1 + str1).includes(str2);
}

// Time: O(N), Spce: O(N)

console.log(stringRotation('javascript', 'scriptjava'))
console.log(stringRotation('RotateMe', 'eRotateM'))