/*
Given 2 "es5 constructor" style functions ParentClass and ChildClass. Let's make extend another
*/

function ParentClass() {
  this.score = 0;
}
ParentClass.prototype.increment = function () {
  return ++this.score;
};
ParentClass.prototype.decrement = function () {
  return --this.score;
};

function ChildClass() {
  this.name = "Eugene";
  this.age = 26;
}
ChildClass.prototype.toString = function () {
  return `${this.name} ${this.age} ${this.score}`;
};

/**
 * @param {Function} Child  - class which should be extended
 * @param {Function} Parent - class which should be the parent
 * @return {Function}
 */
function _extend(Child, Parent) {
  // Create a prototype object which have a __proto__
  // link to parent class
  Child.prototype = Object.create(Parent.prototype);
  // Defined a super class link
  Child.prototype._super = Parent;
  // We've created a prototype object on Child with an empty
  // constuctor, this will result to resolving the constructor
  // to ParentClass. Let's provide a correct constuctor function
  Object.defineProperty(Child.prototype, "constructor", {
    value: Child,
    enumerable: false,
    writable: true,
  });

  return Child;
}

const ChildClass = _extend(function ChildClass() {
    this._super(); // init parent class
    this.name = "Eugene";
    this.age = 26;
}, ParentClass)

ChildClass.prototype.toString = function () {
    return `${this.name} ${this.age} ${this.score}`
}

const ch = new ChildClass();

console.log(ch.toString()); // 'Eugene 26 0'
ch.increment();
console.log(ch.toString()); // 'Eugene 26 1'
console.log(ch instanceof ParentClass) // true
console.log(ch instanceof ChildClass)  // true