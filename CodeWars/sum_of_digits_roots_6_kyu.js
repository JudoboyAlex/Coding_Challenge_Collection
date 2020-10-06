function digital_root(n) {
  let arr = Array.from(String(n), Number);

  if (arr.length >= 2) {
    let arr2 = Array.from(String(arr.reduce((a, b) => a + b)), Number);
    if (arr2.length <= 1) {
      return arr2.reduce((a, b) => a + b);
    } else {
      let arr3 = Array.from(String(arr2.reduce((a, b) => a + b)), Number);
      return arr3.reduce((a, b) => a + b);
    }
  } else {
    return arr.reduce((a, b) => a + b);
  }
}

// Better Solution#1
function digital_root(n) {
    return (n - 1) % 9 + 1;
  }

// Better Solution#2
function digital_root(n) {
if (n < 10) return n;

return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}

// Better Solution#3
function digital_root(n){
n = eval(n.toString().split('').join('+'));

if (n > 9) {
    return digital_root(n);
}

return n;
}