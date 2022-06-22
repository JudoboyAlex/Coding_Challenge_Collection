function get(source, path, defaultValue = undefined) {
  const props = Array.isArray(path)
    ? path
    : path.replaceAll("[", ".").replaceAll("]", "").split(".");
  let curNode = source;
  for (let i = 0; i < props.length; i++) {
    let k = props[i];
    if (curNode[k] === undefined) return defaultValue;
    if (i === props.length - 1) return curNode[k];
    else curNode = curNode[k];
  }
}

const obj = {
  a: {
    b: {
      c: [1, 2, 3],
    },
  },
};

get(obj, "a.b.c"); // [1,2,3]
get(obj, "a.b.c.0"); // 1
get(obj, "a.b.c[1]"); // 2
get(obj, ["a", "b", "c", "2"]); // 3
get(obj, "a.b.c[3]"); // undefined
get(obj, "a.c", "bfe"); // 'bfe'
