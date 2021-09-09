Array.prototype.myFilter = function(callback, context){
  var finalArray = [];
  // console.log(this)
  for(let i = 0; i < this.length; i++){
    if(callback.call(context, this[i], i, this)){
      finalArray.push(this[i])
    }
  }
  return finalArray;
}

let ages = [34,23,54,6,34,12];

let finalResult = ages.myFilter(function(x){
  return x > 20
})

console.log(finalResult);
