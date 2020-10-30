// My Solution
function solution(number){
  let arr = [];

  for(let i = 1; i < number; i++){
    if( i % 3 === 0 && i % 5 === 0){
      arr.push(i);
    } else if(
      i % 3 === 0
    ){
      arr.push(i)
    } else if (
      i % 5 === 0
    ){
      arr.push(i)
    } 
  }
  if(!arr[0]){
    return 0;
  } else {
  let total = arr.reduce((a,b) => a + b);
  return total
    }
}
console.log(solution(10));

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Better Solution#1
function solution(number){
  var sum = 0;
  
  for(var i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

// Better Solution#2
function solution(number){
  return number < 1 ? 0 : [...new Array(number).keys()].filter(n => n % 3 == 0 || n % 5 == 0).reduce((a, b) => a + b);
}