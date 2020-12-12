//Unable to Solve
var sumPairs=function(ints, s){
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    
    if (seen[s - ints[i]]) {
      console.log(seen[s - ints[i]])
      return [s - ints[i], ints[i]];
    }
    console.log(seen[ints[i]]);
    
    seen[ints[i]] = true
  }
}

//Better Solution
function sumPairs(ints, s) {
  let seen = new Set();
  for (let i of ints) {
    if (seen.has(s - i)) return [s - i, i];
    seen.add(i);
    console.log(seen);
    
  }
}

console.log(sumPairs([1, 2, 5, 7, 3, 15], 8));
console.log(sumPairs([10, 5, 2, 3, 7, 5],10));