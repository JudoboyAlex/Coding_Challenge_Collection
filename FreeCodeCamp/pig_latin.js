// Solution#1
function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
translatePigLatin("consonant");


// Solution#2
function translatePigLatin(str) {
// Create variables to be used
var pigLatin = "";
var regex = /[aeiou]/gi;

// Check if the first character is a vowel
if (str[0].match(regex)) {
    pigLatin = str + "way";
} else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
} else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
}

return pigLatin;
}

// test here
translatePigLatin("consonant");


// Solution#3
function translatePigLatin(str) {
if (str.match(/^[aeiou]/)) return str + "way";

const consonantCluster = str.match(/^[^aeiou]+/)[0];
return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// test here
translatePigLatin("consonant");


// Solution#4
function translatePigLatin(str) {
return str
    .replace(/^[aeiou]\w*/, "$&way")
    .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
}

// test here
translatePigLatin("consonant");