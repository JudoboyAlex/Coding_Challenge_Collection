// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []

// My Solution
function toArray(obj) {
	return Object.entries(obj)
}

toArray({ shrimp: 15, tots: 12 })
toArray({})