var promisePool = async function (functions, n) {
  async function evaluateNext() {
    if (functions.length === 0) return;
    const fn = functions.shift();
    await fn();
    await evaluateNext();
  }
  const nPromises = Array(n).fill().map(evaluateNext);
  await Promise.all(nPromises);
};
/**
 * const sleep = (t) => new Promise(res => setTimeout(res, t));
 * promisePool([() => sleep(500), () => sleep(400)], 1)
 *   .then(console.log) // After 900ms
 */


/*
Example Dry Run:
Let's consider an example to illustrate the behavior of promisePool:

functions = [asyncFn1, asyncFn2, asyncFn3, asyncFn4, asyncFn5]
n = 2
Execute asyncFn1 and asyncFn2 concurrently.
When either asyncFn1 or asyncFn2 resolves, execute asyncFn3.
When either asyncFn1 or asyncFn2 resolves again, execute asyncFn4.
Finally, when either asyncFn1 or asyncFn2 resolves, execute asyncFn5.
*/

 var promisePool = async function (functions, n) {
   const initial = functions.slice(0, n);
   const remaining = functions.slice(n);
   const grabRemaining = () =>
     remaining.length && remaining.shift()().then(grabRemaining);
   return Promise.all(initial.map((fn) => fn().then(grabRemaining)));
 };