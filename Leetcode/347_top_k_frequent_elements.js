// My Solution
var topKFrequent = function (nums, k) {
  let hash = {};
  let arr = [];
  nums.map((val) => (hash[val] ? (hash[val] += 1) : (hash[val] = 1)));
  let result = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);
  for (let i = 0; i < k; i++) {
    arr.push(result[i]);
  }

  return arr;
};
