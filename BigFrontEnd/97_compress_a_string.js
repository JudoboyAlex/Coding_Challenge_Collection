function compress(str) {
  const res = [];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;
    if (str[i] !== str[i + 1]) {
      res.push(str[i]);
      if (count > 1) {
          res.push(count);
        }
      count = 0;
    }
  }
  return res.join("");
}
