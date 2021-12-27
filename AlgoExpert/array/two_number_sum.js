
//O(n)time and O(n) space
let two_number_sum = (nums, target) => {
  let map = new Map();
  for(let i=0; i < nums.length; i++){
      if(map.has(target - nums[i])){
          return [(target - nums[i]), nums[i]];
      } 
      map.set(nums[i], i);
  }
  return [];
};

console.log(two_number_sum([3,5,-4,8,11,1,-1,6], 10))

//O(n log(n)) tiem and O(1) space
function twoNumberSum(array, targetSum) {
  array.sort((a,b) => a-b);
	let left =0;
	let right = array.length - 1;
	while(left < right){
		const currentSum = array[left] + array[right];
		if(currentSum === targetSum){
			return [array[left], array[right]];
		} else if ( currentSum < targetSum){
			left++;
		} else if ( currentSum > targetSum) {
			right--;
		}
	}
	return [];
}