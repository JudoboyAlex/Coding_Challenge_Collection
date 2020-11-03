// My Solution

function persistence(num) {
  let counter = 0;
  let arr = num.toString().split("").map(Number);
  
  while( arr.length > 1){
    arr = arr.reduce((a,b) => a*b).toString().split("").map(Number);
    counter++;
  }
  return counter;
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(0));

// Better Solution
const persistence = num => {
  return `${num}`.length > 1 
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
    : 0;
}