let myObject = {
  name: 'Alexander',
  age: '30',
  department: 'IT'
};

let newObject = {};

Object.entries(myObject).forEach(entry => {
  let key = entry[0];
  let value = entry[1];
  newObject[value] = key;
});

console.log(newObject);