var isMonotonic = function(A) {
  if (A.length <= 1) return true;
  let increasing = false;
  let decreasing = false;
  for (let i =0; i < A.length-1; i++) {
      if (A[i] > A[i+1]) decreasing = true;
      if (A[i] < A[i+1]) increasing = true;
      if (increasing && decreasing) return false;
  }
  return true;
};

console.log(isMonotonic([1,2,2,3]))
console.log(isMonotonic([6,5,4,4]))