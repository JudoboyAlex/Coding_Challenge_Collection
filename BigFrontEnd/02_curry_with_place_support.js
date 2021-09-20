// Example:
const  join = (a, b, c) => {
  return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)
curry.placeholder = Symbol()
const _ = curry.placeholder

// curriedJoin(1, 2, 3) // '1_2_3'

// curriedJoin(_, 2)(1, 3) // '1_2_3'

// curriedJoin(_, _, _)(1)(_, 3)(2) // '1_2_3'
/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
 function curry(func) {
  return function curried(...args) {
    const complete = args.length >= func.length && !args.slice(0, func.length).includes(curry.placeholder);
    if(complete) return func.apply(this, args)
    return function(...newArgs) {
      // replace placeholders in args with values from newArgs
      const res = args.map(arg => arg === curry.placeholder && newArgs.length ? newArgs.shift() : arg);
      return curried(...res, ...newArgs);
    }
  }
}

// console.log(curriedJoin(1, 2, 3))
console.log(curriedJoin(_, _, _)(1)(_, 3)(2))
// console.log(curriedJoin(_, 2)(1, 3))
