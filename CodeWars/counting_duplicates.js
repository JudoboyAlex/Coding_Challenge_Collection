// My Solution
function duplicateCount(text) {
  let arr = text.toLowerCase().split("");
  let cache = {};
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    cache[arr[i]] = (cache[arr[i]] || 0) + 1;
    console.log(cache);
  }
  
  for (j in cache) {
    if (cache[j] > 1) {
      count++;
    }
  }
  return count;
}

console.log(duplicateCount("aabbcde"));

//Better Solution
function duplicateCount(text){
  return text.toLowerCase().split('').filter(function(val, i, arr){
    return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  }).length;
}