function evenChars(str) {
    let newArr = [];
    let arr = str.split("");
    if(arr.length < 2 || arr.length > 100){
      return "invalid string";
    }
    for ( let i=0; i < arr.length; i++){
      if ( (i + 1) % 2 === 0){
        newArr.push(arr[i])
      }
    }
    return newArr;
  }

  console.log(evenChars("abcdefghijklm"))
  console.log(evenChars("a"))

// Better Solution#1
  function evenChars(string) {
    return (string.length < 2 || string.length > 100) ? "invalid string" : 
    [...string].filter((x, i) => i % 2);
  }