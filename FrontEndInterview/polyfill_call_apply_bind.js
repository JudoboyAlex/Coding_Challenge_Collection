Function.prototype.myCall = function (thisContext, ...args) {
  let symbol = Symbol();
  thisContext[symbol] = this;
  let returnValue = thisContext[symbol](...args);
  delete thisContext[symbol];
  return returnValue;
};

Function.prototype.myApply = function (thisContext, args = []) {
  return this.myCall(thisContext, ...args);
};

Function.prototype.myBind = function (thisContext, ...args) {
  return (...newArgs) => this.myCall(thisContext, ...args, ...newArgs);
};
