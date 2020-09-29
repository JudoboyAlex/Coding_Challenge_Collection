function validate(n){
    let arr = Array.from(String(n), Number)
    if(arr.length % 2 == 0){
        for(i =0; i < arr.length; i++){
          if(i % 2 ==0){
            arr[i] = arr[i] * 2
            if(arr[i] > 9){
              arr[i] = arr[i]/2 
            }
          } 
        }
      } else {
        for(i =1; i < arr.length; i++){       
          if(i % 2 != 0 ){
            arr[i] = arr[i] * 2
            if(arr[i] > 9){
              arr[i] = arr[i]/2 
            }
          }
        }
      }
  
        
      let total = arr.reduce((a, b) => a + b, 0);
      if(total % 10 == 0){
        return true;
      } else {
        return false;
      }
    }
  
  
  console.log(validate(1230));
  console.log(validate(12309));

//   Better Solution#1
function validate(n){
    var sum = 0;
  
    while (n > 0) {
      var a = n % 10;
      n = Math.floor(n / 10);
      
      var b = (n % 10) * 2;
      n = Math.floor(n / 10);
      
      if (b > 9) {
        b -= 9;
      }
      
      sum += a + b;
    }
    
    return sum % 10 == 0;
  }

//   Better Solution#2
function validate(n) {
    n = n.toString().split('').map(Number).reverse();
    return n.reduce(function (sum, digit, index) {
      if (index & 1) digit <<= 1;
      if (digit > 9) digit -= 9;
      return sum + digit;
    }, 0) % 10 == 0;
  }