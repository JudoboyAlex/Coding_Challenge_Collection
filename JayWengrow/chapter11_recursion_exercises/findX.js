// Use recursion to write a function that accepts a string and returns the first index that contains the character “x.” 
// For example, the string, "abcdefghijklmnopqrstuvwxyz" has an “x” at index 23. 
// To keep things simple, assume the string definitely has at least one “x.”

const findX=(str) => {

  if(str[str.length-1] === "x"){
    return str.length-1;
  }
  let newStr = str.slice(0, -1);
  return findX(newStr);
}

console.log(findX("abcdefghijklmnopqrstuvwxyz"));