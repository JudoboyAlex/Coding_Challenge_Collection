// 11) Flatten a nested object of varying debt.

const obj = {
  level1: {
    level2: {
      level3: {
        more: "stuff",
        other: "otherz",
        level4: {
          the: "end",
        },
      },
    },
    level2still: {
      last: "one",
    },
    am: "bored",
  },
  more: "what",
  ipsum: {
    lorem: "latin",
  },
};

var removeNesting = function (obj, parent) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      removeNesting(obj[key], parent + "." + key);
    } else {
      flattenedObj[parent + "." + key] = obj[key];
    }
  }
};

let flattenedObj = {};
const sample = removeNesting(obj, "");
console.log(flattenedObj);