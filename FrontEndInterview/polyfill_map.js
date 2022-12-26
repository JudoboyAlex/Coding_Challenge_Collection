

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

// ECMA version
Array.prototype.myMap = function (callbackFn, thisArg) {
  const len = this.length;
  const array = new Array(len);

  for (let k = 0; k < len; k++) {
    // Ignore index if value is not defined for index (e.g. in sparse arrays).
    if (Object.hasOwn(this, k)) {
      array[k] = callbackFn.call(thisArg, this[k], k, this);
    }
  }

  return array;
};