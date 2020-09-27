function highAndLow(numbers){
    // ...
    let arr = numbers.split(" ");
    console.log(arr);
    
    let sortArr = [];
    for(let i = 0; i < arr.length; i++){
      sortArr.push(parseInt(arr[i]))
    }
  
    let finalArr = sortArr.sort((a,b)=>a-b);
    return finalArr[finalArr.length-1].toString() + " " + finalArr[0].toString() 
  }
  
  console.log(highAndLow("1 2 5 4 3"))
  console.log(highAndLow("1 9 3 4 -5"))

//   Better Solution#1
function highAndLow(numbers){
    numbers = numbers.split(' ').map(Number);
    return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
  }

//   Better Solution#2
function highAndLow(numbers){
    numbers = numbers.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
  }