var chunk = function (arr, size) {
  let array = [];
  for (let i = 0; i < arr.length; i += size) {
    const chunked = arr.slice(i, i + size);
    array.push(chunked);
  }
  return array;
};
