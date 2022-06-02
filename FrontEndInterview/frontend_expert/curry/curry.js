function curry(callback) {
  const curriedCallback = (...args) => {
    //console.log(args)
    if (args.length === 0) {
      return callback();
    }

    return (...otherArgs) => {
      //console.log(otherArgs);
      if (otherArgs.length === 0) {
        return callback(...args);
      }

      return curriedCallback(...args, ...otherArgs);
    };
  };

  return curriedCallback;
}

const sum = (...numbers) =>
  numbers.reduce((total, number) => total + number, 0);
const curriedSum = curry(sum);

// console.log(curriedSum()); //0
// console.log(curriedSum(1)()); //1
console.log(curriedSum(1, 2)(3)(4, 5, 6)()); //21
