/*
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
*/

function longest(s1, s2) {
    let combinedString = s1 + s2;
    return combinedString.split("").sort().filter((item, pos, self) => {
      return self.indexOf(item) == pos;
      }).join('');
  }

// Better Solution#1
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

// Other Solution#2
function longest(s1, s2) {
    // your code
    s3 = s1 + s2;
    s4 = s3.split("");
    s4 = s4.sort().filter(function(element, index, array){
      return element !== array[index - 1];
    });
    return s4.join("");
  }