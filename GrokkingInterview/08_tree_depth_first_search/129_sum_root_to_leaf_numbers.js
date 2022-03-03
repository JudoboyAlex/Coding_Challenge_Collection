const sumNumbers = (root, curPath = "", sum = 0) => {
  curPath += root.val;
  if (!root.left && !root.right) sum += +curPath;
  root.left && (sum += sumNumbers(root.left, curPath));
  root.right && (sum += sumNumbers(root.right, curPath));
  return sum;
};
