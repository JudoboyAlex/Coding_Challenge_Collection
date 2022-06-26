// The question asks the candidate to write a function that takes any number of numbers as the input and uses this addRemote to return a Promise that resolves to the total sum.
// https://www.zhenghao.io/posts/remote-add

/*
add(1, 2).then(sum => console.log(sum)) // 3
add(1, 2, 3).then(sum => console.log(sum)) // 6
add(1).then(sum => console.log(sum)) // 1
*/

// Solution#1
function add(...inputs) {
  return inputs.reduce(
    (sumPromise, num) => sumPromise.then((sum) => addRemote(sum, num)),
    Promise.resolve(0)
    // 👆 initializing the sumPromise to be a Promise that resolves to 0
    // so that we can safely call `.then` on it at the first iteration
  );
}

// Solution#2
function getSum(...numbers) {
  return numbers.reduce(async (sumPromise, num) => {
    const sum = await sumPromise;
    return sum + num;
  }, 0);
  // 👆 we don't need to `Promise.resolve(0)` for the initial value as
  // awaiting a non-promise value will automatically
  // wrap that value in a Promise
}

// Solution#3 - concurrent solution
function add(...inputs) {
  const promises = [];
  while (inputs.length) {
    const [a = 0, b = 0] = inputs.splice(0, 2);
    promises.push(addRemote(a, b));
  }

  return Promise.all(promises).then((sums) =>
    sums.length === 1 ? sums[0] : add(...sums)
  );
}

console.time('concurrent')
add(1,2,3,4,5,6,7,8,9).then(sum => console.timeEnd('concurrent'))
// 413.84619140625 ms