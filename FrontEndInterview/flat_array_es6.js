const arr = [1, [2,3], 4, [5,[6,1]], 7];
const flatArr = [].concat(...arr) // only works on 1 level

console.log(flatArr)
console.log(arr.flat(Infinity)) // built in flat function   