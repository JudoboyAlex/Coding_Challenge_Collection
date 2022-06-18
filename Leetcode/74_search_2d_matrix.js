// Solution#1
function searchMatrix(matrix, target) {
  let m = matrix.length;
  if (m == 0) return false;
  let n = matrix[0].length;

  // binary search
  let left = 0,
    right = m * n - 1;
  let pivotIdx, pivotElement;
  while (left <= right) {
    pivotIdx = Math.floor((left + right) / 2);
    pivotElement = matrix[Math.floor(pivotIdx / n)][pivotIdx % n];
    if (target == pivotElement) return true;
    else {
      if (target < pivotElement) right = pivotIdx - 1;
      else left = pivotIdx + 1;
    }
  }
  return false;
}
// Time: O(log(mn)), Space: O(1)

// Solution#2
var searchMatrix = function (matrix, target) {
  let row = matrix.map((r) => r[0]);
  let rowIdx = binarySearch(row, target);
  let idx = binarySearch(matrix[rowIdx], target);
  return rowIdx in matrix && matrix[rowIdx][idx] == target;
};

const binarySearch = (arr = [], value) => {
  let [low, high] = [0, arr.length - 1];
  while (low <= high) {
    let mid = ((low + high) / 2) >> 0;
    if (arr[mid] == value) {
      return mid;
    } else if (arr[mid] > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low - 1;
};
