//Found this challenge from Twitter
const secondLargest = ( array ) => {
  let arr = [];
  let count = 0;
  for(let i = 0; i < array.length; i++){
    if(count < array[i] ){
      count = array[i]
      arr.push(array[i])
    }
  }
  if(arr.length === 0){
    return arr;
  }

  if(arr.length === 1 ){
    for(let j = 0; j < arr.length; j++){
      if(array[j] === arr[0]){
        array[j] = 0
      }
    }
    let max = 0;
    for(let k = 0; k < array.length; k++){
      if(array[k] > max){
        max = array[k]
      }
    }
    return max;
  }

  return arr[arr.length-2]
  
}

console.log(secondLargest([6,6,6,7,7,7,3,1,2,,7,5]))