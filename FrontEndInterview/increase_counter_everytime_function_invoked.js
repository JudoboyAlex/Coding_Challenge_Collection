let rakuten = (function(){
  let counter = 0;

  return function() {
    counter++;

    return counter;
  }
})()

console.log(rakuten())
console.log(rakuten())
console.log(rakuten())