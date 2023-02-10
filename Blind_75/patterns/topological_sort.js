// https://leetcode.com/problems/course-schedule/description/
// 207. Course Schedule
// Topological Sort with indegree
var canFinish = function (numCourses, prerequisites) {
  let order = [];
  const queue = [];
  const graph = new Map();
  const indegree = Array(numCourses).fill(0);

  for (const [course, prerequisite] of prerequisites) {
    // build graph map
    if (graph.has(prerequisite)) {
      graph.get(prerequisite).push(course);
    } else {
      graph.set(prerequisite, [course]);
    }
    // build indegree array
    indegree[course]++;
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const vertex = queue.shift();
    if (graph.has(vertex)) {
      for (const course of graph.get(vertex)) {
        indegree[course]--;
        if (indegree[course] === 0) queue.push(course);
      }
    }
    order.push(vertex);
  }

  return numCourses === order.length;
};
