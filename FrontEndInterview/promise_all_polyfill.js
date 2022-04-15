function waitForAll(promises) {
  // Start with an empty array.
  let arrayPromise = Promise.resolve([]);

  for (const promise of promises) {
    /* Build a new promise holding an array that contains all of the old
     * array elements, plus the one from this promise. */
    arrayPromise = arrayPromise.then((array) =>
      promise.then((value) => [...array, value])
    );
  }

  return arrayPromise;
}

// Youtube Roadside Coder solution from 02/13/22 video
function myPromiseAll(promises){
  let result = [];
  return new Promise((resolve, reject) => {
    promises.forEach((p, index) => {
      p.then((output) => {
        result.push(output);
        if(index === promises.length - 1){
          resolve(result)
        }
      }).catch((err) => reject(err));
    });
  });
}

function showText(text, time){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

myPromiseAll([
  showText('hello', 1000),
  Promise.resolve('hi'),
  Promise.reject('bye')
]).then((value) => console.log(value));