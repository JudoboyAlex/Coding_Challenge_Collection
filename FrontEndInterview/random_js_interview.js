// const string = '?item1=01&item2=02&item3=03&item4=04'

// Convert that string to an object of keys and values and return the value of item3.

const string = '?item1=01&item2=02&item3=03&item4=04'

// Solution #1
function parseStr(){
  let object = {}  
  string.slice(1).split('&').forEach((param) => {
    let param = param.split('=');
    object[param[0]] = param[1];
  })
  return object.item3;
}

// Solution #2
const stringObject = string.slice(1).split('&').reduce((obj, param) => {
  const pair = param.split('=');
  obj[pair[0]] = pair[1];
  return obj
}, {})