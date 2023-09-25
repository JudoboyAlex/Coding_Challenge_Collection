function print() {
  console.log("hello world!");
}

// My Solution
function sampler(fn, duration) {
  let timer = duration;
  return function sample() {
    timer--;
    if (timer === 0) {
      fn();
    }
  };
}

// Book Solution
function sampler(fn, count, context){
  let counter = 0;
  return function (...args) {
    // set the counters
    let lastArgs = args;
    context = this ?? context;
    // invoke only when number of calls is equal to the counts
    if (++counter !== count) return;
    fn.apply(context, args);
    counter = 0;
  };
}

const sample = sampler(print, 3);
sample();
sample();
sample();
