// O(log(n)) time and O(1) space
function binarySearch(array, target) {
  // Write your code here.
	let min = 0;
	let max = array.length-1;
	let guess;
	
	while(min <= max){
		guess = Math.floor((min+max)/2);
		if(array[guess] === target){
			return guess;
		} 
		
		if(array[guess] < target){
			min = guess + 1
		} else {
			max = guess - 1
		}
	}
	
	return -1;
}

// recursion solution
// O(log(n)) time and O(log(n)) space
function binarySearch(array, target) {
  // Write your code here.
	return binarySearchHelper(array,target,0,array.length-1);
}

function binarySearchHelper(array, target, left, right){
	if(left > right) return -1;
	const middle = Math.floor((left + right) / 2);
	const potentialMatch = array[middle];
	if(target === potentialMatch){
		return middle;
	} else if( target < potentialMatch){
		return binarySearchHelper(array, target, left, middle -1);
	} else {
		return binarySearchHelper(array, target, middle + 1, right);
	}
}