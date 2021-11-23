let jsonObj =[{
  name : "Alex",
  games : {ps5: "overwatch", xbox: "mario", nintendo: {switch: "luigi"}},
  lunch : "bento"
  },
  {
  name : "Sarah",
  games : {ps5: "overwatch", xbox: "mario", nintendo: {switch: "luigi"}},
  lunch : "bento"
  },  
]

let nestedObj =   
  {
    name : "Sarah",
    games : {ps5: "overwatch", xbox: "mario", nintendo: {switch: "luigi"}},
    lunch : "bento"
  } 


const flattenObj = (obj) => {
  // The object which contains the
  // final result
  let result = {};
  // loop through the object "ob"
  for (const i in obj) {
      // We check the type of the i using
      // typeof() function and recursively
      // call the function again
      if ((typeof obj[i]) === 'object' && !Array.isArray(obj[i])) {
          const temp = flattenObj(obj[i]);
          // console.log(temp)
          for (const j in temp) {
            // console.log(j)
              // Store temp in result
              result[i + '_' + j] = temp[j];
          }
      }
      // Else store ob[i] in result directly
      else {
          result[i] = obj[i];
      }
  }
  return result;
};

console.log(flattenObj(nestedObj))

function flatJsonObj(obj){
  return obj.map((data) =>flattenObj(data))
}

console.log(flatJsonObj(jsonObj))