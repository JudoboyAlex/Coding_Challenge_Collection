// Given a dictionary and a string. Return if the string can be space seperated into words of dictionary.

let s = "helloworldhe"; // string is without spaces Output: "hello world he"
let dict = {
  he: true,
  hell: true,
  hello: true,
  world: true,
};

// Each space separated world is present in the dictionary

function spaceSeparate(s, dict) {
  let n = s.length;
  for (let i = 0; i < n; i++) {
    let part1 = s.slice(0, i);
    let part2 = s.slice(i, n);
    if (dict[part1] != undefined) {
      if (dict[part2] !== undefined) {
        return part1 + " " + part2;
      } else {
        part2 = spaceSeparate(part2, dict);
        if (part2 !== null) {
          return part1 + " " + part2;
        }
      }
    }
  }
  return null;
}

console.log(spaceSeparate(s, dict));
