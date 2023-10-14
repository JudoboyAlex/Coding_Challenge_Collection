// My Solution
var expect = function (val) {
  let num = val;
  function toBe(val) {
    if (num === val) {
      return true;
    } else if (num !== val) {
      throw "Not Equal";
    }
    return this;
  }

  function notToBe(val) {
    if (num === val) {
      throw "Equal";
    } else if (num !== val) {
      return true;
    }
    return this;
  }

  return { toBe, notToBe };
};

// Object factory
var expect = function (val) {
  return {
    toBe: (val2) => {
      if (val !== val2) throw new Error("Not Equal");
      return true;
    },
    notToBe: (val2) => {
      if (val === val2) throw new Error("Equal");
      return true;
    },
  };
};

// In ES6
class Expect {
  constructor(val) {
    this.val = val;
  }

  toBe(val2) {
    if (this.val !== val2) {
      throw new Error("Not Equal");
    }
    return true;
  }

  notToBe(val2) {
    if (this.val === val2) {
      throw new Error("Equal");
    }
    return true;
  }
}

function expect(val) {
  return new Expect(val);
}
