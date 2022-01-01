function largestNumber(nums) {
  if(nums.length <= 1) return nums.toString();
  let sorted = nums.map(n => n.toString()).sort((a, b) => {
      if(a.concat(b) > b.concat(a)) return -1;
      return 1;
  });
  if(sorted[0] === "0") return "0";
  return sorted.join("");
};

console.log(largestNumber([10,2])) // "210"
console.log(largestNumber([3,30,34,5,9])) // "9534330"