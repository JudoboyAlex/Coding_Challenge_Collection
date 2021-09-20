// Object.keys
let account = {
  first: 'Zsolt',
  last: 'Nagy',
  email: 'info@zsoltnagy.eu'
};

console.log(Object.keys( account )); // [first, last, email]

// Object.values and entries
let account = {
  first: 'Zsolt',
  last: 'Nagy',
  email: 'info@zsoltnagy.eu'
};

console.log(Object.values( account )); // [ 'Zsolt', 'Nagy', 'info@zsoltnagy.eu' ]
console.log(Object.entries( account ));
// [
//   [ 'first', 'Zsolt' ],
//   [ 'last', 'Nagy' ],
//   [ 'email', 'info@zsoltnagy.eu' ]
// ]

let account = {
  first: 'Zsolt',
  last: 'Nagy',
  email: 'info@zsoltnagy.eu'
};
let accountMap = new Map( Object.entries( account ) );
console.log(accountMap);

let iterator = Object.values( account ).entries();
console.log(iterator);
//> ArrayIterator {}

console.log( iterator.next() );
//> { value: [0, "Zsolt"], done: false }

for ( let [val, key] of iterator ) {
    console.log( val, key );
}
//> 1 "Nagy"
//> 2 "info@zsoltnagy.eu"