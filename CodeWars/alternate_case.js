function alternateCase(s) {
    let arr = s.split("");
    console.log(arr)
    let newArr = [];
    for(let i=0; i < arr.length; i++){
  
      if(arr[i] === arr[i].toLowerCase()){
        newArr.push(arr[i].toUpperCase());
      } else {
        newArr.push(arr[i].toLowerCase());
      } 
    }
    return newArr.join('');
  }

//   Better Solution #1
alternateCase = (s) => s.split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('');