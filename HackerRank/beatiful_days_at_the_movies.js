// My Solution
function beautifulDays(i, j, k) {
    let arr =[]
    let count = 0;
    for( let a = 1; a < j-i; a++){
        arr.push(i + a)
    }
    arr.push(i)
    arr.push(j)
    for ( let b = 0; b < arr.length; b++){
        if (Math.abs(arr[b].toString().split('').reverse().join('') - arr[b]) % k ==0){
            count++
        }
    }
    return count;
}

console.log(beautifulDays(20,23,6));

// Solution by Other Programmer
function processData(input) {
    let setup = input.split(" "),
        i = parseInt(setup[0]),
        j = parseInt(setup[1]),
        k = parseInt(setup[2]),
        beautifulDays = 0;
    for (i; i <= j; i++) {
        let reverse = parseInt(i.toString().split("").reverse().join(""), 10);
        if (Math.abs(i - reverse) % k === 0) {
            beautifulDays++;
        }
    }
    console.log(beautifulDays);
} 