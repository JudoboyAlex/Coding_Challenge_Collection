let array = [
  ["I", "B", "C", "A", "L", "K", "A"],
  ["D", "R", "F", "C", "A", "E", "A"],
  ["G", "H", "O", "E", "L", "A", "D"]
 ]

//IROCLED

 function decode(message) {
  let i = 0, j = 0, cols = message[0]?.length
  let decoded = '', step = 1

  while(j < cols) {
    decoded += message[i][j]
    if(!message[i+step]){
      step *= -1
    }
    i += step
    j++
  }

  return decoded
}

 console.log(decode(array))