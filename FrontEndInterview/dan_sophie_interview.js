// When a use type in string, return true if string is found in dictionary

// Input: ["cat", "car", "bar"]
let hash = {};

function setUp(input){
  for(key of input){
    hash[key] = true;
  }
  console.log(hash)
  return hash;
}

function isInDict(word){
  return Object.keys(hash).includes(word);
}

setUp(["cat", "car", "dog"])
console.log(isInDict("dog"))

// Refactored in OOP
class Dictionary{
  constructor(wordArray){
    this.record = wordArray;
    this.hash = {};
  }

  setUp(){
    for(let key of this.record){
      this.hash[key] = true;
    }
    return this.hash;
  }

  isInDict(word){
    return Object.keys(this.hash).includes(word);
  }
}

let dictionary = new Dictionary(["cat", "car", "dog"])
dictionary.setUp()
console.log(dictionary.isInDict("cat"))
console.log(dictionary.isInDict("Alex"))


// Wildcard * can be any letter. Optimize it to O(1) run time
// This is Dan Cortes solution
class Dictionary {
  constructor(wordsArray){
    const wordMap = wordsArray.reduce((acc, word) => {
      acc[word] = true;

      word.split('').forEach((letter, i) => {
        const start = word.slice(0,i);
        const end = word.slice(i + 1);
        // console.log(start)
        const partialWord = `${start}*${end}`;
        // console.log(partialWord)
        acc[partialWord] = true;
      });
      return acc;
    }, {});
    
    this.dict = wordMap;
  }

  isInDict(word){
    return !!this.dict[word];
  }
}

const test = new Dictionary(['cat', 'car', 'bar'])

console.log(test.isInDict('cat')); // true
console.log(test.isInDict('*at')); // true
console.log(test.isInDict('*a*')); // false
console.log(test.isInDict('don')); // false
console.log(test.isInDict('do*')); // false