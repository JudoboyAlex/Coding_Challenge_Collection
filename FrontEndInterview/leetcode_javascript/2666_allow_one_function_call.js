var once = function(fn) {
    let counter = 0;
    return function(...args){
        if(counter === 0 ) {
          counter++;
          return fn.apply(this,args);
        }
        return undefined;
    }
};

// Bind Function to a Context

// Example of why use "bind"
const context = { Name: 'Alice' };

function getName() {
  return this.Name;
}
const boundGetName = getName.bind(context);

getName(); // undefined
getName.apply(context, []); // "Alice"

// Another example
const Person = function(name) {
  this.name = name;
}

Person.prototype.getName = once(function() {
  return this.name;
});

const alice = new Person('Alice');
alice.getName(); // Expected Output: "Alice"

// Solution
var once = function (fn) {
  let hasBeenCalled = false;
  return function (...args) {
    if (!hasBeenCalled) {
      hasBeenCalled = true;
      return fn(...args);
    }
  };
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */