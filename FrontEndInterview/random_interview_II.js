// Given data, sum up all the values
const tree = [ 
  {
      id: 1,
      value: 2,
      children: [
          {
              id: 4,
              value: 3,
              children: [
                  {
                      id: 5,
                      value: 4,
                      children: [
                          {
                              id: 6,
                              value: 4,
                              children: null
                          }
                      ]
                  }
              ]
          }
      ]
  },
  {
      id: 2,
      value: 3,
      children: [
          {
              id: 7,
              value: 4,
              children: [
                  {
                      id: 8,
                      value: 9,
                      children: null
                  }
              ]
          },
          {
              id: 9,
              value: 4,
              children: null
          }
      ]
  },
  {
    id:10,
    value:3,
    children: null
  }
]

// Solution#1
const sumValues = data => data.reduce((acc, cur) =>
  acc + cur.value + (cur.children ? sumValues(cur.children) : 0),
0
);

// Solution#2
const sumValues = (nodes) => nodes == null ? 0 : nodes.map(n => n.value + sumValues(n.children)).reduce((e1, e2) => 
e1 + e2)

// Solution#3
function sumValues(nodes) {
  if (nodes == null) {
    return 0
  }

  let sum = 0

  for (let n of nodes) {
    sum += n.value
    sum += sumValues(n.children)
  }

  return sum
}

console.log(sumValues(tree))