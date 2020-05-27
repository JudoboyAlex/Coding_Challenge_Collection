function gcd(n1, n2) {
    let arr = [n1 , n2]
    let arrTwo = []
    let small = arr.sort((a,b) => a - b)[0]
    for (let i = 1; i <= small; i++){
        if ( arr[0] % i == 0 && arr[1] % i == 0){
            arrTwo.push(i);
            }
        }
    let big = arrTwo.sort((a,b) => b - a)[0]
    console.log(big);
    }   

gcd(32, 8)
// gcd(32, 8) ➞ 8

// gcd(8, 12) ➞ 4
gcd(17, 13)
// gcd(17, 13) ➞ 1

// Better Solution by Other Programmer
const gcd = (n1, n2) => !n2 ? n1: gcd(n2, n1 % n2)