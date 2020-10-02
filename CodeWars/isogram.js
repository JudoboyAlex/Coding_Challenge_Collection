// Was Not Able to Solve
// Solution#1
function isIsogram(str){ 
    return !/(\w).*\1/i.test(str)
  }
//   Solution#2
function isIsogram(str){
    return new Set(str.toUpperCase()).size == str.length;
  }
//   Solution#3
  function isIsogram(str){
    var i, j;
    str = str.toLowerCase();
    for(i = 0; i < str.length; ++i)
      for(j = i + 1; j < str.length; ++j)
        if(str[i] === str[j])
          return false;
    return true;
  }
//   Solution#4
  function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
  }
//   Solution#5
  function isIsogram(str) {
    var map = {};
    var result = true;
    str.split('').forEach(function(char) {
      if (map[char.toUpperCase()] === undefined) {
        map[char.toUpperCase()] = 1;
      } else {
        result = false;
      }
    });
    return result;
  }