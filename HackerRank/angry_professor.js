// My Solution
function angryProfessor(k, a) {
    let count = 0;
    for(let i=0; i < a.length; i++){
      if (a[i] <= 0){
        count++
      }
    }
    if( count >= k ){
      return "NO"
    } else {
      return "YES"
    }
  }

// Solution by Other Programmer
function angryProfessor(k, a) {
    const t = a.filter(i => i <= 0)
    return t.length >= k ? 'NO' : 'YES'
}

console.log(angryProfessor(3,[-1,-3,4,2]))
console.log(angryProfessor(2,[0,-1,2,1]))
