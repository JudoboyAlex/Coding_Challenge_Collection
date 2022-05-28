// https://www.notion.so/Front-End-Preparation-a0ac842415a04ddf9319718ea6ba22a4
function isDescendant(parent, child) {
  while (child.parentNode) {
    if (child.parentNode == parent) return true;
    else child = child.parentNode;
  }
  return false;
}
