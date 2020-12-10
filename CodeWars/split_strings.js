//My Solution
let arr = str.split("");
let finalArr = [];
let words = "";

if(str.length === 0){
  return finalArr;
}

for(let i = 0; i < arr.length; i=i+2){

   words = words + arr.slice(i,i+2).join("");
   finalArr.push(words);
   words="";
}

if(finalArr[finalArr.length-1].length === 1){
 finalArr[finalArr.length-1] = finalArr[finalArr.length-1] + "_";
}

return finalArr;

console.log(solution('abc'));
console.log(solution('abcdef'));

//Better Solution
function solution(s){
  return (s+"_").match(/.{2}/g)||[]
}