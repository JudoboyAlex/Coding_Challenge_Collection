// Get index of repeated characters
const input ="hellooooloo";


console.log(getRepeated(input)) // [(2,3), (4,7), (9,10)]

// Check if I can form a word in the dictionary by removing one or more repeated letters.
const dictionary = {
  'hellolo': true
};
const input = "hellooooloo";

console.log(canBeFormed(input)) // true,
// because by deleting the repeated characters of `o` we can form 

// Insert space after each word
const dict = {
  hi: true,
  hello: true,
  world: true
 };
 
 const str = spaceSeparator('helloworld'); // "hello world"
 const str2 = spaceSeparator('helloworldhi'); // "hello world hi"
 const str2 = spaceSeparator('helloworldh'); // "" , as h is not present in dict we throw "" as output
 