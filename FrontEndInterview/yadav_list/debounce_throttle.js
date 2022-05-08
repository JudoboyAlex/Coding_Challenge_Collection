// debounce

const debounce = function (func, interval) {
  let timerId;
  return function (e) {
    clearTimeout(timerId);
    timerId = setTimeout(function () {
      func.apply();
    }, interval);
  };
};
debounce(apiCall, 3000);

// throttle

const throttle = (callback, interval) => {
  let timerId;
  let allowEvents = true;

  return function () {
    let context = this;
    let args = arguments;

    if (allowEvents) {
      callback.apply(context, args);
      allowEvents = false;
      timerId = setTimeOut(function () {
        allowEvents = true;
      }, interval);
    }
  };
};