// 9) Given an array or variable input size, write a function to shuffle the array.

const swap = (index1, index2, arr) => {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
};

const shuffle = (arr) => {
  let totalLength = arr.length;
  while (totalLength > 0) {
    let random = Math.floor(Math.random() * totalLength);
    totalLength--;
    swap(totalLength, random, arr);
  }
  return arr;
};

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr = shuffle(arr);