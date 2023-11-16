/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
  let promises = new Array(functions.length).fill(null);
  let count = 0;

  return new Promise(async (resolve, reject) => {
    if (functions.length === 0) {
      resolve([]);
      return;
    }

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then((val) => {
          promises[i] = val;
          count++;
          if (count === functions.length) {
            resolve(promises);
          }
        })
        .catch((err) => reject(err));
    }
  });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

/*
Sources of error
If your resulting array has the correct values, but the time elapsed is incorrect, then the code is probably being held up by await. 
Remember that the function will wait for the promise to resolve with the await keyword. 
A correct solution will run all the promises asynchronously, but will only resolve the resulting array after all promises have been resolved.
*/