var findOrder = function (numCourses, prerequisites) {
  const order = [];
  const queue = [];
  const graph = new Map();
  const indegree = Array(numCourses).fill(0);

  for (const [e, v] of prerequisites) {
    // build graph map
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
    console.log(graph); // 0 --> 1
    // build indegree array
    indegree[e]++;
    console.log(indegree); // [0, 1]
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const v = queue.shift();
    console.log(v);
    if (graph.has(v)) {
      for (const e of graph.get(v)) {
        indegree[e]--;

        if (indegree[e] === 0) queue.push(e);
      }
    }
    order.push(v);
  }

  return numCourses === order.length ? order : [];
};
