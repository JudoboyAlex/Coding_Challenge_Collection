function elementAfter(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] > target) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  if (arr[left] === target) {
    return arr[left + 1];
  }
  if (arr[left - 1] === target) {
    return arr[left];
  }
  return undefined;
}

console.log(elementAfter([1, 2, 3, 4, 5, 6, 7], 5));
