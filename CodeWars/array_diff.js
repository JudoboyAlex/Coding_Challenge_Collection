//My Solution
function arrayDiff(a, b) {
  let newArr = [];
  if (b.length == 0) {
    return a;
  }
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      newArr.push(a[i]);
    }
  }
  return newArr;
}

console.log(arrayDiff([7, 20, -6, -20], [-6, -20, 20]));

//Better Solution
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}