const myPromiseAll = function (promises) {
  const results = [];
  let numberOfFinishedFuncs = 0;

  return new Promise((resolve, reject) => {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          numberOfFinishedFuncs++;
          results.push(res);

          if (numberOfFinishedFuncs === promises.length) {
            resolve(results);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

function promiseCreaterFunc(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(timeout), timeout);
  });
}

const promiseList = [
  promiseCreaterFunc(1000),
  promiseCreaterFunc(3000),
  promiseCreaterFunc(2000),
];

myPromiseAll(promiseList)
  .then((results) => console.log(results))
  .catch((error) => console.log(error));
