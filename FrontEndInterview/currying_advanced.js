function add(num1, num2) {
  if(num1 === undefined) {
      return add;
  }

  if(num2 === undefined) {
      return function innerAdd(num3) {
          if(num3 === undefined) {
              return innerAdd;
          }
          
          return num1 + num3;
      }
  }
  
  return num1 + num2;
}

console.log(add(3)()()()(4)); // -> 7
console.log(add()()()()(10)(12)); // -> 22

//Roadside Coder Solution on Infinite Currying
function add(a){
    return function(b){
        if(b) return add(a + b)
        return a;
    };
}

console.log(add(5)(2)(4)(8)());