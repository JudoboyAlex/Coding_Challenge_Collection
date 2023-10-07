// Book Solution
function asyncParallel(tasks, callback) {
  // store the result
  const results = [];
  // track the task executed
  let tasksCompleted = 0;
  // run each task
  tasks.forEach((asyncTask) => {
    // invoke the async task
    // it can be a promise as well
    // for a promise you can chain it with then
    asyncTask((value) => {
      // store the output of the task
      results.push(value);
      // increment the tracker
      tasksCompleted++;
      // if all tasks are executed
      // invoke the callback
      if (tasksCompleted >= tasks.length) {
        callback(results);
      }
    });
  });
}

function createAsyncTask() {
  const value = Math.floor(Math.random() * 10);
  return function (callback) {
    setTimeout(() => {
      callback(value);
    }, value * 1000);
  };
}

const taskList = [
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
  createAsyncTask(),
];
asyncParallel(taskList, (result) => {
  console.log("results", result);
});
// Output: "results"[(1, 6, 7, 7, 9, 9)]; // [object Array] (6)
