// My Solution
function smallestDifference(arrayOne, arrayTwo) {
  let minimumDiff = Number.MAX_SAFE_INTEGER;
  let arr = [];
  for(let i = 0; i < arrayOne.length; i++){
    for(let j = 0; j < arrayTwo.length; j++){
      if(Math.abs(arrayOne[i]-arrayTwo[j]) < minimumDiff){
        minimumDiff = Math.abs(arrayOne[i]-arrayTwo[j])
        arr = [];
        arr.push(arrayOne[i])
        arr.push(arrayTwo[j])
      }
    }
  }
  return arr;
}

console.log(smallestDifference([-1,5,10,20,28,3], [26,134,135,15,17]))

// O(nlog(n) + mlog(m)) time | O(1) space
function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
	arrayOne.sort((a,b) => a - b);
	arrayTwo.sort((a,b) => a - b);
	let idxOne = 0;
	let idxTwo = 0;
	let smallest = Infinity;
	let current = Infinity;
	let smallestPair = [];
	while(idxOne < arrayOne.length && idxTwo < arrayTwo.length){
		let firstNum = arrayOne[idxOne];
		let secondNum = arrayTwo[idxTwo];
		if( firstNum < secondNum){
			current = secondNum - firstNum;
			idxOne++;
		} else if (secondNum < firstNum){
			current = firstNum - secondNum;
			idxTwo++;
		} else {
			return [firstNum, secondNum];
		}
		if(smallest > current){
			smallest = current;
			smallestPair = [firstNum, secondNum];
		}
	}
	return smallestPair;
}
