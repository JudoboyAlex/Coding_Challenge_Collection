// Write a function which returns the index of the first non repeating character in a string.

const nonRepeatingChar = (str) => {
  let hash = {};

  let arr = str.toLowerCase().split("");

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) {
      hash[arr[i]] += 1;
    } else {
      hash[arr[i]] = 1;
    }
  }

  for (key in hash) {
    if (hash[key] === 1) {
      return arr.indexOf(key);
    }
  }

  return -1;
};

console.log(nonRepeatingChar("Toronto"));
console.log(nonRepeatingChar("Ceridian"));
