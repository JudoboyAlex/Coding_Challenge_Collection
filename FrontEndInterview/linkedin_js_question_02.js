/**
 * Convert "(1, 2,3), (4,5), (6,7,  8), (   9, 10, 11)"
 * to [123, 45, 678, 91011]
 * and apply some operation to all the accumulate number, like sum
 */

const converter = (str) => {
  return str
    .split(")")
    .map((x) => {
      return x.match(/[0-9]/g);
    })
    .map((arr) => arr && Array.isArray(arr) && arr.join(""))
    .map((num) => +num)
    .reduce((acc, n) => (acc += n), 0);
};

const str = "(1,2,3), (4, 5), (6,7,8), (9, 10, 11)";
console.log(converter(str));
