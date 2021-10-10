const arr = [1, [2,3], 4, [5,[6,1]], 7];
const flatArr = [].concat(...arr) // only works on 1 level

console.log(flatArr)
console.log(arr.flat(Infinity)) // built in flat function   

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

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}