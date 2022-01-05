const shuffle = (arr) => {
  return arr.slice().sort(() => Math.random() - 0.5)
}

console.log(shuffle([1,2,3,4])) // [3,4,2,1]