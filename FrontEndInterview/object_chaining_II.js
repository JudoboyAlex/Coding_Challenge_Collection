// Write a js function that can be invoked like below -
// calc().add(10).subtract(5).multiply(20).divide(2).getResult() . In this case the output should be 50.

function calc() {
  let result = 0;

  function add(num) {
    result += num;
    return this;
  }

  function substract(num) {
    result -= num;
    return this;
  }

  function multiply(num) {
    result *= num;
    return this;
  }

  function divide(num) {
    result /= num;
    return this;
  }

  function getResult() {
    return result;
  }

  return { add, substract, multiply, divide, getResult };
}
