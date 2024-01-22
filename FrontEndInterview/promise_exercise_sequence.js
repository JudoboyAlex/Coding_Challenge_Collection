let arr = [
  function () {
    return new Promise((res) => {
      setTimeout(() => res(10));
    });
  },
  function (param) {
    return new Promise((res) => {
      setTimeout(() => res(10 + param));
    });
  },
  function () {
    return new Promise((res) => {
      setTimeout(() => res(20 + param));
    });
  },
];

// recursion solution
function resolvePromisesInSequence(arr) {
  const results = [];

  const sequence = async (index, param) => {
    if (index < arr.length) {
      const result = await arr[index](param);
      results.push(result);
      return sequence(index + 1, result);
    } else {
      return results;
    }
  };

  return sequence(0, 0);
}

// iterative solution
function resolvePromisesInSequence(arr) {
  return arr.reduce((promiseChain, currentFunction) => {
    return promiseChain.then((param) => {
      return currentFunction(param);
    });
  }, Promise.resolve(0));
}

resolvePromisesInSequence(arr)
  .then((results) => {
    console.log(results); // [10, 20, 40]
  })
  .catch((error) => {
    console.error(error);
  });