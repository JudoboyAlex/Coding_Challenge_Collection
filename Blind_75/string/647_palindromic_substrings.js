function countSubstrings(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    expand(i, i) // odd length
    expand(i, i + 1) // even length
  }
  return count

  function expand(l, r) {
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      count++
      l--
      r++
    }
  }
}

console.log(countSubstrings("abc"))