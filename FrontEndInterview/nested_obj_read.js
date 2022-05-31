// Implement function to read field inside a nested object.

const obj = {
  A: {
    B: {
      C: {
        D: {
          E: 2,
        },
      },
    },
  },
};

console.log(read(obj, "A.B.C.D.E"));
// return 2 as answer if E exists else return undefined

function read(obj, str) {
  let len = str.length;
  const arr = str.split('.');
// Instead of looping over path, as the keys could be “aa”
  for (let i = 0; i < len; i++) {
    if (str[i] != ".") {
      arr.push(str[i]);
    }
  }
  let newObj = { ...obj };
  for (let j = 0; j < arr.length; j++) {
    if (newObj.hasOwnProperty(arr[j])) {
      newObj = newObj[arr[j]];
    }
  }
  return newObj;
}
console.log(read(obj, "A.B.C.D.E"));