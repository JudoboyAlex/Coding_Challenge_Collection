var fs = require("fs");
var arr = fs.readFileSync("resource.txt").toString().split("\n");
let arr2 = fs.readFileSync("resource.txt").toString();

let result = [];
arr.map((val, idx) => {
    let mid = Math.floor(val.length/2)
    result.push([[val.slice(0, mid + 1)], [val.slice(mid + 1, val.length)]]);
})

let hashLowerCase = {
    a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9, j:10, k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26
}
let hashUpperCase = {}

let count = 27;
for(key in hashLowerCase){
    
    hashUpperCase[key.toUpperCase()] = count;
    count++;
    if(count === 53) break;
}
let hashLetters = { ...hashLowerCase, ...hashUpperCase };

let test = [[["testA"], ["tbobtA"]]]

function sumPriorities(arr){
    let sum = 0;
    for( let [dataOne, dataTwo] of arr){
        let dataOneArr = [...new Set(dataOne[0].split(""))];
        let dataTwoArr = [...new Set(dataTwo[0].split(""))];
        for (let char of dataOneArr) {
          // console.log(char)

          if (dataTwoArr.includes(char)) {
            // console.log(hashLetters[char]);
            sum += hashLetters[char];
          }
        }
    }
    return sum;
}

console.log(sumPriorities(result));

/*
BdbzzddChsWrRFbzBrszbhWMLNJHLLLLHZtSLglFNZHLJH
nnfMwqpQTMffHlNNLllHnZSS
cGpcMwfppfqcjcTCBBzWDsDbDrjzWz
*/
function day3Part1(data) {
  const getLetterValue = (ltr) => {
    if (/[a-z]/.test(ltr)) {
      return ltr.charCodeAt(0) - 96;
    }
    if (/[A-Z]/.test(ltr)) {
      return ltr.charCodeAt(0) - 38;
    }
    throw new Error("Letter Code Not Found");
  };

  let answer = 0;

  const dataArr = data.split(/\r?\n/);
  dataArr.forEach((sackStr) => {
    const splitPoint = sackStr.length / 2;
    const str1 = sackStr.slice(0, splitPoint);
    const str2 = sackStr.slice(-1 * splitPoint);

    const str1Set = new Set([...str1]);
    let i = 0;
    while (!str1Set.has(str2[i])) {
      i++;
    }
    let letterValue = getLetterValue(str2[i]);
    answer += letterValue;
  });

  return answer;
}

function day3Part2(dataStr) {
  const getLetterValue = (ltr) => {
    if (/[a-z]/.test(ltr)) {
      return ltr.charCodeAt(0) - 96;
    }
    if (/[A-Z]/.test(ltr)) {
      return ltr.charCodeAt(0) - 38;
    }
    throw new Error("Letter Code Not Found");
  };
  const dataArr = dataStr.split(/\r?\n/);
  let answer = 0;

  for (let i = 0; i < dataArr.length; i += 3) {
    let line1Set = new Set([...dataArr[i]]);
    let line2Set = new Set([...dataArr[i + 1]]);
    let comparisonString = dataArr[i + 2];
    for (let j = 0; j < comparisonString.length; j++) {
      let ltr = comparisonString[j];
      if (line1Set.has(ltr) && line2Set.has(ltr)) {
        answer += getLetterValue(ltr);
        break;
      }
    }
  }

  return answer;
}

console.log(day3Part2(arr2));