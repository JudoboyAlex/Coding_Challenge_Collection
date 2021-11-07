const isPermutation = (str1, str2) => {
  let hash = {};
  str1.split("").map((letter1) => !hash[letter1] ? hash[letter1] = 1 : hash[letter1] += 1)
  str2.split("").map((letter2) => !hash[letter2] ? hash[letter2] = 1 : hash[letter2] -= 1)
  return Object.keys(hash).every((word) => hash[word] === 0 ? true : false)
}

console.log(isPermutation("judo", "udoj")) // true
console.log(isPermutation("apple", "pompom")) // false