// What will be the o/p for all the console logs?
var name = "mmt";
var myObject = {
  name: "myObject",
  property: this.name,
  regularFunction: function () {
    return this.name;
  },
  arrowFunction: () => {
    return this.name;
  },
  iife: (function () {
    return this.name;
  })(),
};
// in browser environment
console.log("this.name: " + this.name); // mmt
/* this.name refers to the global variable name, which is set to "mmt." So, it logs: "this.name: mmt."*/
console.log("myObject.name: " + myObject.name); // myObject
/* myObject.name refers to the "name" property of myObject, which is set to "myObject." So, it logs: "myObject.name: myObject."*/
console.log("myObject.property: " + myObject.property); // mmt
/* Here, myObject.property is set to this.name, which refers to the global variable name ("mmt"). So, it logs: "myObject.property: mmt." */
console.log("myObject.iife: " + myObject.iife); // mmt
/* The IIFE (Immediately-Invoked Function Expression) is executed when the object is created. Inside the IIFE, this.name refers to the global variable name, so it logs: "myObject.iife: mmt." */
console.log(myObject.regularFunction()); // myObject
/* When you call myObject.regularFunction(), it correctly uses the this context of myObject. So, it logs "myObject." */
const regFn = myObject.regularFunction;
console.log("regfn.call: " + regFn.call(myObject)); // myObject
/* regFn is a reference to the regularFunction. When you call regFn.call(myObject), it explicitly uses myObject as the this context, so it logs "myObject."*/
console.log("regfn(): " + regFn()); // mmt
/* When you call regFn() directly, it uses the global context (this.name), so it logs "mmt." */
console.log("regFn.call(window): " + regFn.call(window)); //mmt
/* In this case, window is a browser-specific global object. Since this code is executed in a non-browser environment (e.g., Node.js), "window" is not defined, which is why you get a "ReferenceError" saying that "window is not defined."*/
console.log(
  "myObject.arrowFunction.call(myObject): " +
    myObject.arrowFunction.call(myObject)
); //mmt
/* When you call myObject.arrowFunction.call(myObject), it still uses the lexical this context, which refers to the global name. So, it logs "mmt." */
console.log("myObject.arrowFunction(): " + myObject.arrowFunction()); // mmt
/* The arrow function myObject.arrowFunction always uses the lexical this context, which refers to the global name. So, it logs "mmt."*/
console
  .log
  "myObject.arrowFunction.call(window)  " + myObject.arrowFunction.call(window) 
  ();  // mmt
/* Similar to the previous case with regFn.call(window), calling myObject.arrowFunction.call(window) in a non-browser environment results in a "ReferenceError" because "window" is not defined.*/

// What will be the implementation of partialCurry function?
function mul(a, b, c){
    return a * b * c;
}

const partialCurryMultiplied = partialCurry(mul, 2);
console.log(partialCurryMultiplied(3)(4)) //should log 24 */

// Write a function to return the count of numbers in an array, if the array can consist of string, numbers and functions ? What will be the time complexity and space complexity ?
let myArr = [1, "2", [3, 4, [5]], function () {}, 8, 9];