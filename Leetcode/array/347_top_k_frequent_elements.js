var topKFrequent = function(nums, k) {
  let hash = {};
  for(let num of nums){
      if(!hash[num]){
          hash[num] = 1
      } else {
          hash[num] += 1;
      }
  }
  
  let result = Object.keys(hash).sort((a,b) => hash[b] - hash[a])
  return result.slice(0,k);
};

