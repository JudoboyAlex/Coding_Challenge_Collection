function mergeJSON(obj, ...sources){
  for( let source of sources){
    for(let key in source){
      // when value is null, continue looping
      if(source[key] == null) continue;
      obj[key] = replaceValue(obj[key], source[key]);
    }
  }
  return obj;
}

function replaceValue(value, newValue){
  if(Array.isArray(value) && Array.isArray(newValue)){
    // return value.concat(newValue)
    return newValue.map((val,i) => {
      return replaceValue(value[i], val)
    });
  } else if(isObject(value) && isObject(newValue)){
    return mergeJSON(value, newValue);
  }
  return newValue;
}

function isObject(obj){
  return obj && obj.constructor === Object;
}

console.log(mergeJSON(user1, user2))
const user1 = {
  name: "Egghead",
  age: 27,
  links: {
    blog: "https://www.egghead.io",
    facebook: "https://www.facebook.com/egghead",
    instagram: "htpps://www.instagram.com/egghead"
  },
  interests : ["gaming", "judo"]
}

const user2 = {
  name: "Meathead",
  age: 39,
  links: {
    twitter: "https://www.twitter.com/meathead",
    nba: "https://www.nba.com",
  },
  interests : null
}