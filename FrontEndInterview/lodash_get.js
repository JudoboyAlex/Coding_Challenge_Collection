/*
// Requiring the lodash library  
const _ = require("lodash");  
  
// Given object
var object = { 'c': [{ 'python': { 'java': 3 } }] };
  
// Use of _.get method 
console.log(_.get(object, 'c[0].python.java'));
*/


obj.findPath = function (varString) {
  let stringLength = varString.length;
  let varName = "";
  let context = this;

  for (let i = 0; i < stringLength; i++) {
    if (varString[i] != ".") varName += varString[i];
    else {
      if (!context[varName]) return undefined;
      context = context[varName];
      varName = "";
    }
  }

  if (!context[varName]) return undefined;
  else return context[varName];
};
