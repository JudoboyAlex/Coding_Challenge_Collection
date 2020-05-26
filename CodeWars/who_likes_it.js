function likes(names) {
    if (names == ""){
        return 'no one likes this'
    } else if (
      names[0] && !names[1]
    ){
        return `${names[0]} likes this`
    } else if (
        names[1] && !names[2]
    ){
        return `${names[0]} and ${names[1]} like this`
    } else if (
        names[2] && !names[3]
    ){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        let removed = names.splice(0,2)
        let count = names.length
        return `${removed[0]}, ${removed[1]} and ${count} others like this`
    }
  }

//   console.log(likes(['Peter']))
  console.log(likes(['Peter', 'Jason', 'Alex', 'Sandy']))

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

// Other Programmer Solution
function likes(names) {
    switch(names.length){
      case 0:
        return `no one likes this`;
      case 1: 
        return `${names[0]} likes this`;
      case 2: 
        return `${names[0]} and ${names[1]} like this`;
      case 3: 
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
      default: 
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
  }