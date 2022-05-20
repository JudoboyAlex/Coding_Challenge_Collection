const tuple = (str) => {
  const tuples = JSON.parse(`[${str.replace(/\((.+?)\)/g, "[$1]")}]`);

  return {
    multiply: function (index) {
      return tuples.reduce((acc, cur) => acc * cur[index - 1], 1);
    },
  };
};

const str = `(1, 2, 3) , (4, 5, 6) ,  (7, 8, 9) `; // Convert it into  [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
const x = tuple(str);
console.log(x.multiply(2)); // Multiples 2nd item in each tuple . ie 2 * 5 * 8
