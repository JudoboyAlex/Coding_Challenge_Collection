function solve(str){
    let arr = str.split("");
    let indexArr = [];
    for(let i = 0; i < arr.length; i++){
      if(arr[i] == " "){
        indexArr.push(i);
      }
    }
    let reversedArr = arr.reverse().join("").replace(/ /g, "").split("");
  
    for( let j = 0; j < indexArr.length; j++){
      reversedArr.splice(indexArr[j],0, " ");
    }
    return reversedArr.join("");
  }
  
  console.log(solve("i love codewars"));

//   Better Solution#1
function solve(str)
{
  var s = "";
  for (let i = str.length - 1; i >= 0; i--)
  {
    if (str[i] != " ")        s += str[i];
    if (str[s.length] == " ") s += str[s.length];
  }
  return s;
}

// Better Solution#2
function solve(str) {
    let arr = [...str].filter(x => x != ' ')
    return str.replace(/\S/g, _ => arr.pop())
  }

//   Better Solution#3
function solve(str){
    var result = str.split(' ').join('').split('').reverse();
    str.split('').map((c, index) => {
      if(c===' ')
        result.splice(index, 0, ' ');
    });
    return result.join('');
 }