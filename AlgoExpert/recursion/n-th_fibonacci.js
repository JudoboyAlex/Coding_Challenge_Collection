//O(n)
function getNthFib(n) {
  // Write your code here.
  let arr = [0, 1];
  for (let i = 2; i < n + 1 ; i++){
    arr.push(arr[i - 2] + arr[i -1]);
  }
 return arr[n-1];
}

//O(2^n)
function getNthFib(n) {
  // Write your code here.
	if(n === 2) return 1;
	if(n === 1) return 0;
	return getNthFib(n-1) + getNthFib(n-2);
}
