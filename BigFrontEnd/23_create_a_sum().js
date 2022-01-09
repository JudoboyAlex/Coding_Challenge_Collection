function sum(num) {
  const func = function(num2) { // #4
    return num2 ? sum(num+num2) : num; // #3
  }
  
  func.valueOf = () => num; // #2
  return func; // #1
}

console.log(sum(1)(2)(3)(4) === 10) // true
const sum1 = sum(1)
console.log(sum1(2) == 3)// true
console.log(sum(1)(2)(3) == 6) // true