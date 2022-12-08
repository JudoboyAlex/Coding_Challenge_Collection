// Given tree, return last 3 data.
const example = {
  data: "a",
  next: {
    data: "b",
    next: {
      data: "c",
      next: {
        data: "d",
        next: {
          data: "e",
          next: {
            data: "f",
            next: null,
          },
        },
      },
    },
  },
};

// Recursion Solution#1
function getLastThree(tree) {
  return (tree?.data ? tree.data + getLastThree(tree.next) : "").slice(-3);
}

// Recursion Solution#2
function getLastThree(tree) {
  let arr = [];
  function dfs(tree) {
    if (tree.data) arr.push(tree.data);
    if (tree.next) dfs(tree.next);
  }
  dfs(tree);
  return arr.slice(-3);
}

// Iterative Solution
const getLastThree = (obj) => {
  const result = [];
  let current = obj;
  while (current) {
    result.push(current.data);
    current = current.next;
  }
  return result.slice(-3).join("");
};

console.log(getLastThree(example));
