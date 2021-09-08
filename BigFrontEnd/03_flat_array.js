function flat(arr, depth = 1) {
  if (depth <= 0) return arr;

  return arr.reduce((accumulator, currentValue) => {
    const value = Array.isArray(currentValue) ? flat(currentValue, depth -1) : currentValue;
    return accumulator.concat(value);
  }, []);
}

console.log(flat([1, [2], [3, [4]]],2))