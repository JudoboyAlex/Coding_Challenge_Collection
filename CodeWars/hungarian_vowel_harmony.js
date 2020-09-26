function dative(word) {
    let bowelArr = [];
    let arr = word.split("");
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == 'e' || arr[i] == 'é' || arr[i] == 'i' || arr[i] == 'í' || arr[i] == 'ö' || arr[i] == 'ő' || arr[i] == 'ü' || arr[i] == 'ű'){
        bowelArr.push(arr[i]);
      } else if (
        arr[i] =='a' || arr[i] == 'á' || arr[i] == 'o' || arr[i] == 'ó' || arr[i] == 'u' || arr[i] == 'ú'
      ){
        bowelArr.push(arr[i]);
      }
    }
    
    if (bowelArr[bowelArr.length-1] == 'e' || bowelArr[bowelArr.length-1] == 'é' || bowelArr[bowelArr.length-1] == 'i' || bowelArr[bowelArr.length-1] == 'í' || bowelArr[bowelArr.length-1] == 'ö' || bowelArr[bowelArr.length-1] == 'ő' || bowelArr[bowelArr.length-1] == 'ü' || bowelArr[bowelArr.length-1] == 'ű' ){
      arr.push("nek");
    } else {
      arr.push("nak");
    }
    return arr.join("");
  }
  
  console.log(dative("ablak"));
  console.log(dative("szék"));
  console.log(dative("otthon"));
  console.log(dative("yoshi"));

//   Better Solution#1
function dative(word) {
    return (/[aáoóuú]/.test(word)) ? word + "nak" : word + "nek";
  }