function countTrue(arr) {
    let counter = 0;
	 for(let i=0; i < arr.length; i++){
         if(arr[i] == true){
            counter++
         }
     }
     return counter;
}

console.log(countTrue([true, false, false, true, false]));

// countTrue([true, false, false, true, false]) ➞ 2

// countTrue([false, false, false, false]) ➞ 0

// countTrue([]) ➞ 0

// Other Top Solution
const count_true = r => r.filter(Boolean).length