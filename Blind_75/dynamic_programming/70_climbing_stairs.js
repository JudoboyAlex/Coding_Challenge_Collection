var climbStairs = function(n){
  // First two pointers store the first two numbers of the Fibonacci sequence
  let prev = 0;
  let curr = 1;
 // Our third pointer is used to store one side while we update the above two pointers.
  let tmp;

  // We use a for loop to iterate from 1 up to our number n with our constraints  being: 1 <= n <= 45
  for(let i = 1; i <= n; i++){
       // We store one side in our third pointer
       tmp = prev;
       // We then update that side to be equal to the other pointer
       // This is because the next number is equal to the sum of the previous two numbers.
      prev = curr;
     // Next we add tmp which now holds our lower number to curr which holds our upper number to get our next number.
    curr += tmp;
 }
 // Outside of our loop we return curr which stored our cumulative total while we iterated. 
 return curr;
}

console.log(climbStairs(5))