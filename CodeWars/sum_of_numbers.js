function getSum(a, b) {
  let count = 0;
  if (b > a) {
    for (let i = a; a <= b; a++) {
      count = count + a;
    }
  } else if (b < a) {
    for (let i = b; b <= a; b++) {
      count = count + b;
    }
  } else {
    return a;
  }
  return count;
}

// Test.assertEquals(getSum(0,-1),-1);
// Test.assertEquals(getSum(0,1),1);

// Better Solution#1
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

// Better Solution#2
function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}