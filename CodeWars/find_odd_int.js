/* Was Not Able to Solve */

// Solution#1
// const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// Solution#2
function findOdd(A) {
    var obj = {};
    A.forEach(function(el){
      obj[el] ? obj[el]++ : obj[el] = 1;
      console.log(obj);
      console.log(obj[el]);

    });
    
    for(prop in obj) {
      if(obj[prop] % 2 !== 0) return Number(prop);
    }
  }
  console.log(findOdd([22,4,4,5,5,22,22]))

//   Solution#3
//   function findOdd(arr) {
//     return arr.find((item, index) => arr.filter(el => el == item).length % 2)
//   }

//   Solution#4
//   function findOdd(A) {
//     for(var i = 0; i < A.length; i++){  
//       //Query the number of times that this 'i' element appears
//       //then verify if that number of times is odd. If it is true, then return
//       //that 'i' element
//       if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
//         return A[i];
//       }
//     }
//     return 0;
//   }

//   console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5], 5))
//   findOdd([1,1,2,-2,5,2,4,4,-1,-2,5], -1);
//   findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5], 5);
//   findOdd([10], 10);