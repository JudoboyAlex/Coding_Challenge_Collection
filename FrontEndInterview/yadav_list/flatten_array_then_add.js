let arr = [4, 5, 7, 8, [5, 7, 9, [3, 5, 7]]];
let sum = 0;

const calculateSum = (arr) => {
  arr.reduce(function (acc, currentVal) {
    const isEntryArray = Array.isArray(currentVal);
    if (isEntryArray) {
      return acc.concat(calculateSum(currentVal));
    } else {
      sum += currentVal;
      return acc.concat(currentVal);
    }
  }, []);
};
calculateSum(arr);
console.log(sum);
