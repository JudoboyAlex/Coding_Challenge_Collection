function sortArr(items, newOrder) {
  for (let i = 0; i < newOrder.length; i++) {
    while (newOrder[i] !== i) {
      swap(items, i, newOrder[i]);
      swap(newOrder, i, newOrder[i]);
    }
  }
}

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

// const A = ["A", "B", "C", "D", "E", "F"];
// const B = [1, 5, 4, 3, 2, 0];

const A = ["A", "B", "C", "D", "E", "F"];
const B = [1, 3, 4, 5, 2, 0];

console.log(sortArr(A, B)); // ['F', 'A', 'E', 'D', 'C', 'B']

// Solution #2 using map
function sortArr2(items, newOrder) {
  // reorder items inline
  const map = new Map();

  for (let i = 0; i < items.length; i++) {
    // store value that will be overwritten in map for later use
    map.set(newOrder[i], items[newOrder[i]]);

    if (map.get(i) && map.get(i) !== items[i]) {
      // if value from items has been overwritten, grab it from map
      items[newOrder[i]] = map.get(i);
    } else {
      // set item with new index
      items[newOrder[i]] = items[i];
    }
  }
}

// Solution#3 shallow copy array
function sort(items, newOrder) {
  // reorder items inline
  let copyItems = [...items];
  for (let i = 0; i < items.length; i++) {
    let newIndex = newOrder.indexOf(i);
    items[i] = copyItems[newIndex];
  }
}