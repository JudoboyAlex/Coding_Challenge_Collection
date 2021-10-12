/*Use recursion to write a function that accepts an array of strings and returns the total number of characters across all the strings. For example, if the input array is ["ab", "c", "def", "ghij"], the output should be 10 since there are 10 characters in total.*/

const countCharacters = (arr) => {
  let total = 0;
  if(arr.length === 1){
    return arr[0].length;
  }
  total = total + arr[arr.length-1].length
  arr.pop();
  return total + countCharacters(arr)
}

console.log(countCharacters(["ab", "c", "def", "ghij", "god"]));