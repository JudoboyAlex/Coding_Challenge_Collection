// My Solution
function order(words){
  const arr = words.split(" ");
  let finalArr = [...arr];
 
  for(let i = 0;  i < arr.length; i++){
    for(let j = 0; j < arr[i].length; j++){
      if(arr[i][j].match(/(\d+)/)){
        finalArr[arr[i][j]-1] = arr[i]
      }
    }
  }
  return finalArr.join(" ");
}

 console.log(order("is2 Thi1s T4est 3a"));

 //Better Solution
 function order(words){
  
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
} 