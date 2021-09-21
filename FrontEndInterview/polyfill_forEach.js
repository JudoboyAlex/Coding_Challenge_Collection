/**
* Simple implementation of Array.prototype.forEach
*
* Made for the YouTube Video: 'Create your own Array Methods'
* https://youtu.be/1dLlFwqqvHk
* @author SimonHoiberg
*/

Array.prototype.customForEach = function (callback) {
  if (!callback || typeof callback !== 'function') {
    throw Error('The callback provided is not a function');
  }

  if (!this) {
    throw Error('Cannot call forEach on null or undefined');
  }

  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
}

var cities = [
  "Toronto",
  "Vancouver",
  "Seoul",
  "Tokyo",
  "Honolulu"
]

console.log(cities.customForEach((value, index, arr) => console.log(value, index, arr) ))