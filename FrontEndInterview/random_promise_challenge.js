const [A, B, C] = ["WordA", "WordB", "WordC"];

function getA() {
  return A;
}

function getB(callBack) {
  setTimeout(() => {
    callBack(B);
  }, 10);
}

function getC() {
  return Promise.resolve().then(() => C);
}

function getABC() {
  const promiseB = new Promise((resolve) => {
    getB((x) => {
      resolve(x);
    });
  });
  return Promise.all([getA(), promiseB, getC()]);
}

getABC().then((result) => {
  console.log(result);
});
