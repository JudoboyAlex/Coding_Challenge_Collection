// My Solution using promise all
async function executePromises(tasks) {
  // tasks.forEach(async (task) => {
  //   let result = await task;
  //   console.log(result);
  // });
  let [result1, result2, result3] = await Promise.all(tasks);
  console.log(result1);
  console.log(result2);
  console.log(result3);
}

// Book Solution
const executePromises = async function (promises) {
  for (let promise of promises) {
    try {
      const result = await promise;
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  }
};

function asyncTask(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num);
    }, num);
  });
}

let inputs = [asyncTask(3), asyncTask(1), asyncTask(2)];

executePromises(inputs);
/*
Input: [
  asyncTask(3),
  asyncTask(1),
  asyncTask(2)
]
Output:
3 1 2
*/
