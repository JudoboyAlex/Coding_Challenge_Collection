// Given 2 identical DOM tree structures A & B with root nodes rootA and rootB respectively, 
// and a leaf node "n" ( denoted as nodeA ), find the value of a corresponding leaf node "m" ( denoted as nodeB ) 
// in DOM tree B.
// Facebook Interview Question

// A B

// O O |\ |
// O O O O /|\ /|
// O O O O O O \
// O (n) O (m)

function getPathFromNode(root, node) {
  let path = [];
  let currentNode = node;

  while (currentNode !== root) {
    let parent = currentNode.parentElement;
    let children = Array.from(parent.children);

    let index = children.indexOf(currentNode);
    path.push(index);
    currentNode = parent;
  }

  return path;
}

function getNodeFromPath(root, pathToNode) {
  let currentNode = root;

  while (pathToNode.length) {
    currentNode = currentNode.children[pathToNode.pop()];
  }

  return currentNode;
}
//
const nodeValue = (function getSymmetricNode() {
  const rootA = document.getElementById("rootA");
  const rootB = document.getElementById("rootB");
  const nodeA = document.getElementById("nodeA");

  // Find path
  let pathToNode = getPathFromNode(rootA, nodeA);

  // Find node
  let nodeFromPath = getNodeFromPath(rootB, pathToNode);

  return nodeFromPath.innerHtml;
})();

console.log(nodeValue);
