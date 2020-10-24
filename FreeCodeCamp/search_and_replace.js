// my solution
function myReplace(str, before, after) {
    let arr = str.split(" ");
    for(let i=0; i< arr.length; i++){
      if(arr[i] === (before || before.charAt(0).toUpperCase() + before.slice(1))){
        if(arr[i][0] === arr[i][0].toUpperCase()){
            arr[i] = after.charAt(0).toUpperCase() + after.slice(1)
        } else {
          arr[i] = after.toLowerCase()
        }
      }
    }
    return arr.join(" ")
  }

// Better Solution#1
function myReplace(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
      after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
  
    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
  }

// Better Solution#2
function myReplace(str, before, after) {
const myArr = str.split(" ");
const [wordToReplace] = myArr.filter(item => item === before);
return wordToReplace[0].toUpperCase() !== wordToReplace[0]
    ? myArr.map(item => (item === before ? after : item)).join(" ")
    : myArr
        .map(item =>
        item === before ? after[0].toUpperCase() + after.slice(1) : item
        )
        .join(" ");
}
  
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));