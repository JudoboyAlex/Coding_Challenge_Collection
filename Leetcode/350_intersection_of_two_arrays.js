/*
Runtime: 88 ms, faster than 34.22% of JavaScript online submissions for Intersection of Two Arrays II.
Memory Usage: 39.2 MB, less than 73.29% of JavaScript online submissions for Intersection of Two Arrays II.
*/
var intersect = function(nums1, nums2) {
  let hash = {};
  let arr = [];
  
  if(nums1.length >= nums2.length){
    arr1 = nums1;
    arr2 = nums2;
  } else {
    arr1 = nums2;
    arr2 = nums1;
  }
  
  for(let i = 0; i< arr1.length; i++){
      hash[arr1[i]] = (hash[arr1[i]] || 0) + 1
  }
  
  for(let j =0; j < arr2.length; j++){
      if(hash[arr2[j]] >= 1){
          arr.push(arr2[j])
          hash[arr2[j]]--;
      }
  }
  
  return arr;

};

/*
Runtime: 84 ms, faster than 61.66% of JavaScript online submissions for Intersection of Two Arrays II.
Memory Usage: 39.2 MB, less than 66.58% of JavaScript online submissions for Intersection of Two Arrays II.
*/
var intersect = function (nums1, nums2) {
  let solution = [];
  if (nums1.length < nums2.length) {
    return intersect(nums2, nums1);
  }
  const obj = nums1.reduce((acc, num) => {
    acc[num] = acc[num] + 1 || 1;
    return acc;
  }, {});
  for (let i = 0; i < nums2.length; i++) {
    if (obj[nums2[i]] !== undefined && obj[nums2[i]] > 0) {
      obj[nums2[i]] = obj[nums2[i]] - 1;
      solution.push(nums2[i]);
    }
  }

  return solution;
};