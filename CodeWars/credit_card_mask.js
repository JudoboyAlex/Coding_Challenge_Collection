// My Solution

function maskify(cc) {
  let arr = cc.split("");
  if(arr.length === 1){
    return arr.join("");
  } else if (
    !arr[0]
  ){
    return "";
  } 
  for(let i = 0; i < arr.length-4; i++){
    arr[i] = "#";
  }
  return arr.join("");
}

// maskify("4556364607935616") == "############5616"
// maskify(     "64607935616") ==      "#######5616"
// maskify(               "1") ==                "1"
// maskify(                "") ==                 ""
console.log(maskify("4556364607935616"));
console.log(maskify(               "1"));
console.log(maskify(               ""));

// Better Solution#1
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

// Better Solution#2
function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}