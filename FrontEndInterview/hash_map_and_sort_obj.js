let array = ["banana", "orange", "orange", "banana", "banana", "orange","orange"," kiwi"]
// orange:4, banana:3, kiwi:1

function countFruits(arr){
  let hash ={};

  for(let i = 0; i < arr.length; i++){
    if(!hash[arr[i]]){
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]] = hash[arr[i]] + 1;
    }
  }
 
  let result = Object.keys(hash).sort((a,b) => hash[b] - hash[a])

  return result;
}

console.log(countFruits(array))