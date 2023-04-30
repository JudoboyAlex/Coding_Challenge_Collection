/*
Given a positive integer millis, write an asyncronous function that sleeps for millis milliseconds. It can resolve any value.

Input: millis = 100
Output: 100
Explanation: It should return a promise that resolves after 100ms.
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
*/

// Solution#1
async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
}

// Solution#2
async function sleep(millis) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, millis);
  });

  return promise;
}