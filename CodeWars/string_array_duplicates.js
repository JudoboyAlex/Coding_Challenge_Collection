// Solution#1
function dup(s) {
  return s.map(x => x.replace(/(.)\1+/g,'$1'))
};
// Solution#2
function dup(s) {
  return s.map(w => {
    return w.split('').filter((c, i, arr) => {
      return c !== arr[i - 1];
    }).join('');
  });
};
// Solution#3
function dup(array) {
  return array.map(word => word.split('').filter( (letter, index) => letter !== word[index + 1]).join(''))
  };