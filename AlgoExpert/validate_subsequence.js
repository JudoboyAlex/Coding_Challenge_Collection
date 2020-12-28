//O(n) time and O(1) space
function isValidSubsequence(array, sequence) {
  // Write your code here.
	let seqIdx = 0;
	for(const value of array){
		if(seqIdx === sequence.length) break;
		if(sequence[seqIdx] === value) seqIdx++;
	}
	return seqIdx === sequence.length;
}