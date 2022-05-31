function once(func) {
  let val;
  let called = false;

  return function onced(...args) {
    if (!called) {
      val = func.apply(this, args);
      called = true;
      return val;
    }

    return val;
  };
}
