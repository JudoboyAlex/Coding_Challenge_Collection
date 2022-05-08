//Q.1
var x = 1;
var y = x;

x = 0;
console.log(x, y);

//Q.2
var x = [1];
var y = x;

x = [];
console.log(x, y);

//Q.3
function Abc() {
  console.log(this);
}
Abc();
new Abc();

//Q.4
var x = 1;
var obj = {
  x: 2,
  getX: function () {
    return console.log(this.x);
  },
};

obj.getX();
let a = obj.getX;
console.log(a);

//Q.5
//How to get the a to log 2 in the above code

//Q.6
console.log("A");
setTimeout(() => console.log("B"), 0);
setTimeout(() => console.log("C"), 0);
console.log("D");

//Q.7
setTimeout(function () {
  console.log("A");
}, 0);
Promise.resolve()
  .then(function () {
    console.log("B");
  })
  .then(function () {
    console.log("C");
  });

console.log("D");

//Q.8
let obj1 = {
  a: 1,
  b: 2,
};

function mutate(obj) {
  obj = { a: 4, c: 6 };
}

console.log(obj1);
mutate(obj1);
console.log(obj1);

/*
//A.1
0 1

//A.2
[] [1]

//A.3
window object is logged

//A.4
logs 2 and 1

//A.5
a.call(obj);

//A.6
A, D, B , C

//A.7
D, B, C, A

//A.8
{ a: 1, b: 2 }
{ a: 1, b: 2 }
*/