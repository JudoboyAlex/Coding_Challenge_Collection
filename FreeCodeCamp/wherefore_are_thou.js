function whatIsInAName(collection, source) {
    var arr = [];
    for(i=0; i < collection.length; i++){
      for (const [key, value] of Object.entries(collection[i])) {
        arr.push(`${key}:${value}`)
    }
    console.log(arr)
 
  }
  return arr;
}
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

  /*
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }) should return [{ first: "Tybalt", last: "Capulet" }]
  */ 

