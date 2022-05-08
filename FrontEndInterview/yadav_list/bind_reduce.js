//bind
if (!Function.prototype.bind) {
  Function.prototype.bind = function (...arg) {
    const func = this;
    const context = arg[0];
    const params = arg.slice(1);
    return function (...innerParam) {
      func.apply(context, [...params, ...innerParam]);
    };
  };
}

//reduce
Array.prototype.reduce = function (func, initState) {
  const arr = this;
  const callback = func;
  let init = initState;

  arr.forEach(function (value, index) {
    init = callback(init, value);
  });
  return init;
};
