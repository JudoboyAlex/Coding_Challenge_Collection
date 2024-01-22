class Calculator {
  /**
   * @param {number} value
   */
  constructor(value) {
    this.result = value;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  add(value) {
    this.result += value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  subtract(value) {
    this.result -= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  multiply(value) {
    this.result *= value;
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  divide(value) {
    if (value === 0) {
      this.result = "Division by zero is not allowed";
    } else {
      this.result /= value;
    }
    return this;
  }

  /**
   * @param {number} value
   * @return {Calculator}
   */
  power(value) {
    this.result = this.result ** value;
    return this;
  }

  /**
   * @return {number}
   */
  getResult() {
    return this.result;
  }
}

/*
Complexity Analysis
Time complexity: O(1), where each operation (addition, subtraction, multiplication, division, power) are all constant-time operations.

Space complexity: O(1), as the space required does not increase with the size of the input. We only maintain a single variable result irrespective of the number of operations performed.
*/