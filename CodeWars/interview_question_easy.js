/*
"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
*/

function getStrings(city){
    let cache={}
    let newArr = []
    let arr = city.toLowerCase().replace(/ /g, "").split("");
    
    for(i=0; i < arr.length; i++){
      cache[arr[i]] ? cache[arr[i]]= cache[arr[i]] + "*" : cache[arr[i]]= "*"
    }
    for (const [key, value] of Object.entries(cache)) {
      newArr.push(`${key}:${value}`)
  //   console.log(`${key}: ${value}`);
    }
    return newArr.join(",")
  //   console.log(newArr.join(","))
  }

//   Other Solution#1
const getStrings = city =>
  (arr => [...new Set(arr)].join(``).match(/[a-z]/g).map(val => `${val}:${`*`.repeat(arr.filter(v => v === val).length)}`).join(`,`))
  ([...city.toLowerCase()]);