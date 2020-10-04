
function XO(str){
    let countO = 0;
    let countX = 0;
    let arr = str.split("");
    for(i=0; i<arr.lrngth; i++){
        if(arr[i].toLowerCase() == "x"){
            countX++;
        } else if(
            arr[i].toLowerCase() == "o"
        ){
            countO++;
        }
    }
    return countO == countX ? true : false;
}
// Better Solution#1
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

// Better Solution#2
  function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
  }

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false