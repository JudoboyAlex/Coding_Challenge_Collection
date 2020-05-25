// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"

// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

function toCamelCase(str){
    if ( str.includes("-")){
        let secondWord = str.split("-")[1].charAt(0).toUpperCase() + str.split("-")[1].slice(1)
        let thirdWord = str.split("-")[2].charAt(0).toUpperCase() + str.split("-")[2].slice(1)
        let firstWord = str.split("-")[0]

        if (str.split("-")[3]){
            let fourthWord = str.split("-")[3].charAt(0).toUpperCase() + str.split("-")[3].slice(1)
            let finalWord = firstWord + secondWord + thirdWord + fourthWord
            return finalWord
        } else {
            let finalWord = firstWord + secondWord + thirdWord
            return finalWord
        }
    } else if (
        str.includes("_")
    ){
        let secondWord = str.split("_")[1].charAt(0).toUpperCase() + str.split("_")[1].slice(1)
        let thirdWord = str.split("_")[2].charAt(0).toUpperCase() + str.split("_")[2].slice(1)
        let firstWord = str.split("_")[0]

        if (str.split("_")[3]){
            let fourthWord = str.split("_")[3].charAt(0).toUpperCase() + str.split("_")[3].slice(1)
            let finalWord = firstWord + secondWord + thirdWord + fourthWord
            return finalWord
        } else {
            let finalWord = firstWord + secondWord + thirdWord
            return finalWord
        }
    } else {
        return ''
    }
}

console.log(toCamelCase("the-stealth-warrior"))
// console.log(toCamelCase("The_Stealth_Warrior"))
// console.log(toCamelCase("A-B-C"))
// console.log(toCamelCase(''))

// Other Better Solutions
function toCamelCase(str){
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
  }

function toCamelCase(str){
    return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}