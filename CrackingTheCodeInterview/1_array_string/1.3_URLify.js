const URLify = (str) => {
  const convertToArray = str.trim().split('');
  for(let i in convertToArray) {
    if(convertToArray[i] === " ") {
     convertToArray[i] = "%20"
    }
  }
  return convertToArray.join('');
}

console.log(URLify("I grind leetcode   ")) // I%20grind%20leetcode