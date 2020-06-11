function sumArray(arr) {
    // return arr.reduce((a,b) => a+b, 0)
    return arr.flat(Infinity).reduce((a,b) => a+b, 0)
}

// console.log(sumArray([1, 2, 3]))
console.log(sumArray([1, [2, [1]], 3]));

// sumArray([1, 2, 3]) ➞ 6
// 1 + 2 + 3 = 6

// sumArray([1, [2, [1]], 3]) ➞ 7
// 1 + 2 + 1 + 3 = 7

