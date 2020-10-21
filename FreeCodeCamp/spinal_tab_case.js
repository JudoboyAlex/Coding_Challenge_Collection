function spinalCase(str) {

    return str
      .split(/\s|_|(?=[A-Z])/)
      .join("-")
      .toLowerCase();
  }

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase('thisIsSpinalTap'));
console.log(spinalCase('TheAndyGriffith_Show'));
console.log(spinalCase('Teletubbies say Eh-oh'));