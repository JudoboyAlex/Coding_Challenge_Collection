// How to determine 'this'?
// Implicit binding
// Explicit binding
// New binding
// Default binding

// Implicit binding
function sayMyName(name){
    console.log(`My name is ${name}`)
}

sayMyName('Walter White')
sayMyName('Heisenberg');

const person = {
    name: 'Vishwas',
    sayMyName: function(){
        console.log(`My name is ${this.name}`)
    },
}

person.sayMyName() // My name is Vishwas

// Explicit binding
function sayMyName(name) {
  console.log(`My name is ${name}`);
}

sayMyName.call(person) // My name is Vishwas

// New binding
function Person(name){
    // this = {} --> new keyword creates this
    this.name = name
}

const p1 = new Person('Vishwah')
const p2 = new Person("Batman");

// Default binding --> Looks for this in global scope

// Another explicit binding example 
var scope = "global";

function testThis(){
    console.log(this.scope);
}

let obj = {
    scope : 'object'
}

testThis.call(obj); // object

// this in arrow function
var person = {
  name: "Bob",
  sayHi() {
    let arrow = () => console.log(this.name); // Bob
    arrow();
  },
  print: function(){
      console.log(this.name); // Bob

      const test = () => {
          console.log(this.name); // Bob
      }

      test()
  }
//   print: () => {
//     console.log(this.name); // undefined
//   },
};

person.sayHi();