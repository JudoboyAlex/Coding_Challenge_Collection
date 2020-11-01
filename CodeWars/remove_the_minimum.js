// My Solution
function removeSmallest(numbers) {
  let copyArr = [...numbers];
  let finalCopy = [...numbers];
  let sortArr = copyArr.sort((a,b) => a-b)
  for(let i=0; i < finalCopy.length; i++){
    if(finalCopy[i] === sortArr[0]){
      finalCopy.splice(i,1);
      break;
    }
  }
  return finalCopy;
}

console.log(removeSmallest([1,2,3,4,5]));
console.log(removeSmallest([5,3,2,1,4]));
console.log(removeSmallest([2,2,1,2,1]));

// Better Solution
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}