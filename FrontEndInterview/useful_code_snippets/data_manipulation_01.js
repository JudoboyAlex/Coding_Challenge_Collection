/*
Input:
[ {name: “John”, value: 20}, {name: “John”, value: 10}, {name: “Peter”, value: 20} ]

Exptected Output:
[ { name: ”John”, data: [20, 10]}, { name: “Peter”, data: [20]} ]
*/

let temp = [
  { name: "John", value: 20 },
  { name: "John", value: 10 },
  { name: "Peter", value: 20 },
];

const results = [
  ...temp
    .reduce(
      (acc, { name, value }) =>
        acc.set(name, {
          name,
          data: [...(acc.get(name)?.data ?? []), value],
        }),
      new Map()
    )
    .values(),
];

console.log(results);