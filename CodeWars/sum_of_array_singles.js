// My Solution
function repeats(arr){
  //..
  let cache ={};
  let array = [];
  for(let i = 0; i < arr.length; i++){

    cache[arr[i]] = (cache[arr[i]] || 0 ) + 1;
  }
  console.log(cache);
  for (const property in cache) {
    if(cache[property] === 1){
      array.push(Number(property))
    }
  }
  return array.reduce((a,b) => a+b)
};

console.log(repeats([4,5,7,5,4,8]))

// Better Solution#1
function repeats(arr){
  return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
};

// Better Solution#2
function repeats(arr) {
  let seen = new Set();
  let sum = 0;
  
  for (let v of arr) {
    if (!seen.has(v)) {
      seen.add(v);
      sum += v;
    } else {
      sum -= v;
    }
  }
  
  return sum;
};