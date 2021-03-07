//My Solution
function sortArray(array) {
  let arr = [];
  let arrIndex = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 != 0){
      arr.push(array[i])
      arrIndex.push(i)
    }
  }
  arr.sort((a,b) => a - b)
  for(let j = 0; j < arrIndex.length; j++){
    array[arrIndex[j]] = arr[j]
  }

  return array;
}

console.log(sortArray([5, 8, 6, 3, 4]))

//Better Solution
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}