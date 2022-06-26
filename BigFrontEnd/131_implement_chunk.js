function chunk(items, size) {
  if (size === 0) return [];
  const res = [];
  for (let i = 0; i < items.length; i = i + size) {
    res.push(items.slice(i, i + size));
  }
  return res;
}

console.log(chunk([1, 2, 3, 4, 5], 1));
// [[1], [2], [3], [4], [5]]

chunk([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], [5]]

chunk([1, 2, 3, 4, 5], 3);
// [[1, 2, 3], [4, 5]]

chunk([1, 2, 3, 4, 5], 4);
// [[1, 2, 3, 4], [5]]
