function deepEquals(valueOne, valueTwo) {
  if (typeof valueOne !== typeof valueTwo) return false;

  if (typeof valueOne !== "object") {
    if (Number.isNaN(valueOne) && Number.isNaN(valueTwo)) return true;
    return valueOne === valueTwo;
  }

  if (valueOne === null || valueTwo === null) return valueOne === valueTwo;

  //This handles the case where both values point to the same object.
  if (valueOne === valueTwo) return true;

  if (Array.isArray(valueOne) && Array.isArray(valueTwo)) {
    if (valueOne.length !== valueTwo.length) return false;
    for (let i = 0; i < valueOne.length; i++) {
      if (!deepEquals(valueOne[i], valueTwo[i])) return false;
    }
    return true;
  }

  if (Array.isArray(valueOne) || Array.isArray(valueTwo)) return false;

  const valueOneKeys = Object.keys(valueOne);
  const valueTwoKeys = Object.keys(valueTwo);
  if (valueOneKeys.length !== valueTwoKeys.length) return false;
  for (const key of valueOneKeys) {
    if (!valueTwo.hasOwnProperty(key)) return false;
    if (!deepEquals(valueOne[key], valueTwo[key])) return false;
  }

  return true;
}

deepEquals(1, 1); // true
deepEquals(1, '1'); // false
deepEquals(null, null); // true
deepEquals(null, undefined); // false
deepEquals([], []); // true
deepEquals({}, {}); // true
deepEquals([], {}); // false
deepEquals({a: 123, b: {c: [4,5,6]}}, {a: 123, b: {c: [4,5,6]}}); // true
deepEquals({a: 123, b: {c: [4,5,6]}}, {b: {c: [4,5,6]}}); // false
deepEquals({a: 123, b: {c: [4,5,6]}}, {b: {c: [4,'5',6]}}); // false
deepEquals([1, 2, [3, 4]], [1, 2, [3, 4]]); // true
deepEquals([1, 2, [3, 4, {a: 'abc'}]], [1, 2, [3, 4, {a: 'abc'}]]); // true