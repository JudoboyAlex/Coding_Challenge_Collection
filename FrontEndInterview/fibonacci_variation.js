function fibonacci(n) {
  const seq = [1, 1];

  if(n < 2) {
      return seq.slice(0, n);
  }
  
  while(seq.length < n) {
      const lastItem = seq[seq.length - 1];
      const secondLastItem = seq[seq.length - 2];
      seq.push(lastItem + secondLastItem);
  }
  
  return seq;
}

fibonacci(4); // -> [1, 1, 2, 3]
fibonacci(6); // -> [1, 1, 2, 3, 5, 8]
fibonacci(8); // -> [1, 1, 2, 3, 5, 8, 13, 21]