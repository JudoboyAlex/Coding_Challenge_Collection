/*
Best: O(n) time | O(1) space
Average: O(n^2) time | O(1) space
Worst: O(n^2) time | O(1) space
*/

function bubbleSort(array) {
  // Write your code here.
	const length = array.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) { 
      if(array[j] > array[j+1]) {
        //Swap the numbers
        let temp = array[j]
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }        
  }
  return array;
}