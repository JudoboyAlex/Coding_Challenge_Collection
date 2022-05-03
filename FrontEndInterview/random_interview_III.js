// Given a k ey value object, where keys are string and values can be array, 
// object, string, number, functions, return the same object but instead of values 
// which were function, return the functions' return value.
// Object can be multi-level deep, also functions can have arguments, which will be given.

// eg: {
// a: 1,
// b: () => return 2,
// }

// Output:
// {
// a: 1,
// b: 2
// }
let obj = {
  a: 1,
  b: () => 2,
  c: "OMG!! This is working",
  d: [1, 2, 3, 4],
  e: null,
  f: {
    a: 1,
    b: [99, 98, 97],
    c: { a: 1, b: 2 },
    d: function () {
      return 2;
    },
  },
};

function ConvertObject(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "function") {
      obj[key] = obj[key].call(obj);
    } else if (typeof obj[key] == "object") {
      obj[key] = ConvertObject(obj[key]);
    }
  }

  return obj;
}

console.log(ConvertObject(obj));