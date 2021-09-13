/**
 * @param {Array<(arg: any) => any>} funcs 
 * @return {(arg: any) => any}
 */

// Solution #1
 function pipe(funcs) {
  return function(arg) {
     let result = arg
     for (let func of funcs) {
       result = func.call(this, result)
     }
     return result
  }
}

// Solution #2
// function pipe(funcs) {
//   return function(arg) {
//      return funcs.reduce((result, func) => {
//        return func.call(this, result)
//      }, arg)
//   }
// }
const times = (y) =>  (x) => x * y
const plus = (y) => (x) => x + y
const subtract = (y) =>  (x) => x - y
const divide = (y) => (x) => x / y

console.log(pipe([times(2),plus(3),times(4)]))