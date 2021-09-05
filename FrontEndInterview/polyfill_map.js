

var cities = [
  "Toronto",
  "Vancouver",
  "Seoul",
  "Tokyo",
  "Honolulu"
]

Array.prototype.myMap = function(callback){
  var finalArray = [];
  for(var i = 0; i < this.length; i++){
    finalArray.push(callback(this[i], i, this));
  }
  return finalArray;
}
var result = cities.myMap( c => console.log(c))

