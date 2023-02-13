// Inputs
// inputs: An array of inputs.
// limit: The maximum number of operations at any one time.
// iterateeFn: The async function that should be called with each input to generate the corresponding output. It will have two arguments:
//      input: The input being processed.
//      callback: A function that will be called when the input is finished processing. It will be provided one argument, the processed output.
// callback: A function that should be called with the array of outputs once all the inputs have been processed.
// https://leetcode.com/discuss/interview-experience/2074287/Uber-FrontEnd-Phone-Screen

function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  // implement here
}

mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
  console.log("output:", allResults); // ["User1", "User2", "User3", "User4", "User5"]
})``;


// Solution: You can create promise for each input and use Promise.all to wait for all the promises to resolve and call the final callback.

function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  let promiseArr = [];
  for (let input of inputs) {
    promiseArr.push(
      new Promise((resolve, reject) => {
        iterateeFn(input, (result) => {
          resolve(result);
        });
      })
    );
  }
  Promise.all(promiseArr).then((result) => callback(result));
}

mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
  console.log("output:", allResults); // ["User1", "User2", "User3", "User4", "User5"]
});

// Solution #2
function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

function transformInput(input, iterateeFn) {
  return new Promise((resolve) => {
    iterateeFn(input, (str) => {
      resolve(str);
    });
  });
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  // implement here
  let started = 0;
  let output = [];
  let currIndex = 0;

  async function enqueue() {
    if (currIndex < inputs.length) {
      started++;
      const result = await transformInput(inputs[currIndex++], iterateeFn);
      output.push(result);
      if (output.length === inputs.length) {
        callback(output);
      } else {
        enqueue();
      }
    }
  }

  // Intial run
  while (started < limit && currIndex < inputs.length) {
    enqueue();
  }
}

mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
  console.log("output:", allResults); // ["User1", "User2", "User3", "User4", "User5"]
});

// Solution #3 -- best solution
function getNameById(id, callback) {
  // simulating async request
  const randomRequestTime = Math.floor(Math.random() * 100) + 200;

  setTimeout(() => {
    callback("User" + id);
  }, randomRequestTime);
}

function mapLimit(inputs, limit, iterateeFn, callback) {
  // implement here
  let i = 0;
  let result = [];

  async function execute() {
    let output = [];
    while (i < inputs.length) {
      let slicedInput = inputs.slice(i, i + limit);
      for (let k = 0; k < slicedInput.length; k++) {
        const itemPromise = new Promise((resolve) => {
          iterateeFn(slicedInput[k], resolve);
        });
        output.push(itemPromise);
      }
      result.push(...(await Promise.all(output)));
      output.length = 0;
      i += limit;
    }
  }
  execute().then(() => callback(result));
}

mapLimit([1, 2, 3, 4, 5], 2, getNameById, (allResults) => {
  console.log("output:", allResults); // ["User1", "User2", "User3", "User4", "User5"]
});