Function.prototype.Bind = function(thisArg, ...args) {
  return (...nextArgs) => this.call(thisArg, ...args, ...nextArgs);
}

function print(val1, val2) {
  console.log(this.abc, val1, val2);
}

const printBound = print.Bind({ abc: 123 }, 456);
printBound(789); // -> 123 456 789