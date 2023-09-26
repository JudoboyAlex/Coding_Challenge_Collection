function filterArray(arr, fn) {
  let filteredList = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const output = filterArray(arr[i], fn);
      filteredList.push(output);
    } else {
      if (fn(arr[i])) {
        filteredList.push(arr[i]);
      }
    }
  }
  return filteredList;
}

const arr = [[1, [2, [3, "foo", { a: 1, b: 2 }]], "bar"]];
const filtered = filterArray(arr, (e) => typeof e === "string");
console.log(JSON.stringify(filtered));

// Book Solution
// const filterArray = (arr, test) => {
//   // Store the output
//   const result = [];
//   //iterate the array
//   for (let a of arr) {
//     //if sub-array
//     if (Array.isArray(a)) {
//       //recursively filter the sub-array
//       const output = filterArray(a, test);
//       //store the result
//       result.push(output);
//     } else {
//       //if not an array
//       //test the element
//       //if it passes the test, store its result
//       if (test(a)) {
//         result.push(a);
//       }
//     }
//   }
//   //return the result
//   return result;
// };