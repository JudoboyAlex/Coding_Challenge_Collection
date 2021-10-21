const arr = [1, [2,3], 4, [5,[6,1]], 7];
const flatArr = [].concat(...arr) // only works on 1 level

console.log(flatArr)
console.log(arr.flat(Infinity)) // built in flat function   

// recursion #1
function flatten(arr) {
	return arr.reduce(function(prev, curr) {
		if (Array.isArray(curr)) {
			prev = prev.concat(flatten(curr));
		} else {
            prev.push(curr);
		}
		return prev;
	}, []);
}	
// recursion #2
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}

// iterative
let arr = [1, 2, 3, [4, 5, 6, [7, 8, [9]]]];
let result = [];
var queue = Array.from(arr);
let i = 0;
while (queue.length > 0) {
  let curr = queue.shift();
  if (Array.isArray(curr)) {
    queue.push(...curr);
  } else {
    result.push(curr);
  }
}
console.log(result);

