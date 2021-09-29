// Given a series of child-parent relations like
// ['dog', 'mammal'],
// ["shark, fish"],
// ["cat", "mammal"],
// ["mammal", "animal"],
// ['fish', 'animal']

// capture the relationship of these entities so you can print the
// relationships in a nested format at any point.

// Notes:

// Siblings may be returned in any order.
// Your add function will be called multiple times to add relationships
// Example Outputs (any are valid):

// Option 1:
// animal
//   fish
//     shark
//   mammal
//     dog
//     cat

// Option 2:
// {
//   "value": "animal",
//   "children": [
//     {
//       "value": "fish",
//       "children": [
//         {
//           "value": "shark",
//           "children": []
//         }
//       ]
//     },
//     {
//       "value": "mammal",
//       "children": [
//         {
//           "value": "dog",
//           "children": []
//         },
//         {
//           "value": "cat",
//           "children": []
//         }
//       ]
//     }
//   ]
// }

// Option 3:
// {
//   "animal": {
//     "fish": {
//       "shark": {}
//     },
//     "mammal": {
//       "cat": {},
//       "dog": {}
//     }
//   }
// }

let relationList = [
  ["dog", "mammal"],
  ["shark", "fish"],
  ["cat", "mammal"],
  ["mammal", "animal"],
  ["fish", "animal"],
];

function createMap(list) {
  let has_parent = new Set();
  let all_items = {};

  for ([child, parent] of list) {
    if (!(parent in all_items)) {
      all_items[parent] = {};
    }
    if (!(child in all_items)) {
      all_items[child] = {};
    }
    // console.log(all_items)
    all_items[parent][child] = all_items[child];
    // console.log(all_items)
    has_parent.add(child);
    console.log(has_parent)
  }

  result = {};
  console.log(all_items)

  for (const [key, values] of Object.entries(all_items)) {
    if (!has_parent.has(key)) {
      result[key] = values;
      return result;
    }
  }
  return result;
}

console.log(createMap(relationList));