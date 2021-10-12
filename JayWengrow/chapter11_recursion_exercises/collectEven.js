// Use recursion to write a function that accepts an array of numbers and returns a new array containing just the even numbers.

const evenArray = (arr) => {
  let newArr = [];
  if(arr.length === 1 && arr[0] % 2 === 0) {
    newArr.push(arr[0])
    return newArr; 
  } else if (
    arr.length === 1 && arr[0] % 2 != 0
  ) {
    return newArr;
  }
  if(arr[arr.length-1] % 2 === 0){
    newArr.push(arr[arr.length-1])
  }
  arr.pop();
  return [...newArr].concat(evenArray(arr))

}

console.log(evenArray([1,4,6,9,13]));