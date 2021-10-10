// Given two arrays find intersected value

let intersectedNum = (arr1, arr2) => {
  let hash = {};
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] in hash) {
      hash[arr1[i]]  = hash[arr1[i]] + 1
    } else {
      hash[arr1[i]] = 1;
    }
  }
  for(let i = 0; i < arr2.length; i++){
    if(arr2[i] in hash) {
      hash[arr2[i]]  = hash[arr2[i]] + 1
    } else {
      hash[arr2[i]] = 1;
    }
  }

  let result = Object.keys(hash).filter((value) => hash[value] > 1 );

  return result.map((value) => Number(value))
}

console.log(intersectedNum([1,2,3,4,5], [0,2,4,6,8]))