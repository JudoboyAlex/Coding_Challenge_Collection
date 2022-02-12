var productExceptSelf = function(nums) {
  var output = [];
  var leftMultiple = 1;
  var rightMultiple = 1;
  for (var i=nums.length - 1; i >= 0; i--) {
      output[i] = rightMultiple;
      rightMultiple *= nums[i];
  }
  for (var j=0; j < nums.length; j++) {
      output[j] *= leftMultiple;
      leftMultiple *= nums[j];
  }
  return output;
};

console.log(productExceptSelf([1,2,3,4])) // [24,12,8,6]

// Time Complexity = O(n)
// Space O(1)