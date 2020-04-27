// My Solution
function diceGame(arr) {
    let total = 0;
    for ( let i=0; i < arr.length; i++){
        if(arr[i][0] != arr[i][1]){
            total = total + arr[i][0] + arr[i][1]
        } else {
            return total = 0
        }
    }
    return total
}

console.log(diceGame([[1, 2], [3, 4], [5, 6]]))
console.log(diceGame([[1, 1], [5, 6], [6, 4]]))
console.log(diceGame([[4, 5], [4, 5], [4, 5]]))
// diceGame([[1, 2], [3, 4], [5, 6]]) ➞ 21

// diceGame([[1, 1], [5, 6], [6, 4]]) ➞ 0

// diceGame([[4, 5], [4, 5], [4, 5]]) ➞ 27

//Other Programmer Solution
function diceGame(arr) {
	return arr.every(e => e[0] != e[1]) ? arr.flat().reduce((a,b) => a+b,0) : 0;
}