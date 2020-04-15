// My Solution
function isSlidey(n) {
    let nums = n.toString().split('').map(x=>+x)
    let arr = []
    for ( let i = 0; i < nums.length - 1; i++){
        if (Math.abs(nums[i] - nums[i + 1]) != 1 ){    
            arr.push(false)
        } else {
            arr.push(true)
        }
    }
    if (arr.includes(false)){
        return false;
    } else {
        return true;
    }
}

console.log(isSlidey(123454321))
console.log(isSlidey(1123))

// Solution by Other Programmers
const isSlidey = (n, a = [...`${n}`]) => (
	n < 10 || a.slice(1).every((d,i) => Math.abs(d - a[i]) === 1)
);

// Solution by Other Programmers
function isSlidey(n) {
	n = n.toString();
	return [...n].slice(1).every((x, i) => Math.abs(x - n[i]) === 1);
}

// isSlidey(123454321) ➞ true

// isSlidey(54345) ➞ true

// isSlidey(987654321) ➞ true

// isSlidey(1123) ➞ false

// isSlidey(1357) ➞ false