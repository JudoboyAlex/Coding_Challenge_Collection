const isUnique = (str) => {
  let hash = {};
  let arr = str.split("");
  for(letter of arr){
    if(!hash[letter]){
      hash[letter] = 1;
    } else {
      hash[letter] += 1;
    }
  }
  for(count in hash){
    if(hash[count] > 1){
      return false
    }
  }
  return true;
}

console.log(isUnique("widow")) // false
console.log(isUnique("judo")) // true