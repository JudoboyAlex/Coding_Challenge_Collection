/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
  /**
   * The goal is to find whether the course graph has cycles.
   * 
   * We are looking for the number of indgree for each course and 
   * put the course with no indegree into the queue. As we go 
   * through the courses in queue, we break off the dependency(edge)
   * from the current course in queue in all the prerequisite 
   * pairs. Then we put all the courses with zero indegree into
   * the queue. Repeat until the queue is empty. We maintain a 
   * count and increment it each time we pop the queue. The count 
   * will equal to the number of courses when there's no cycle and it 
   * is possible to take all the courses.
   *
   * directed graph denotes: [prereq] --> [course] 
   */
 var canFinish = function(numCourses, prerequisites) {
  const indegree = new Array(numCourses).fill(0);
  const queue = [];
  for (const [course, prereq] of prerequisites) {
    indegree[course] += 1;
  }
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    } 
  }
  let count = 0;
  
  while (queue.length !== 0) { 
    const c = queue.pop();
    count += 1;
    
    for (const [course, prereq] of prerequisites) {
      if (prereq === c) {
        indegree[course] -= 1;
        if (indegree[course] === 0) {
          queue.push(course);
        }
      }
    }
  }
  return count === numCourses;
};

// Topological Sort
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
  // [0, 1]
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

console.log(canFinish(numCourses = 2, prerequisites = [[1,0]])) // true
console.log(canFinish(numCourses = 2, prerequisites = [[1,0],[0,1]])) // false

// DFS Solution
function canFinish(numCourses, prerequisites){
  const prerequisiteMap = new Map();
  const visitSet = new Set();

  // map each course to prerequisite list
  for (let i = 0; i < numCourses; i++) prerequisiteMap.set(i, []);
  for (let [course, prerequisite] of prerequisites)
    prerequisiteMap.get(course).push(prerequisite);
  //

  const dfs = (course) => {
    // if we have visited this course before, it's a cycle return false
    if (visitSet.has(course)) return false;
    // if there is no prerequisite for this course, return true
    if (prerequisiteMap.get(course).length === 0) return true;

    // currently visiting this course
    visitSet.add(course);
    for (let prerequisite of prerequisiteMap.get(course)) {
      if (!dfs(prerequisite)) return false;
    }
    // we're no longer visiting this course
    visitSet.delete(course);

    // this course can be taken so for optimization we can
    // cache it by making its prerequisites an empty list
    // so that we don't have to repeat the process for this
    // course again (next time it'll return true immediately
    // on line 15)
    prerequisiteMap.set(course, []);

    return true;
  };

  // we have to manually go through every course since the
  // graph nodes might not be fully connected
  for (let i = 0; i < numCourses; i++) {
    if (!dfs(i)) return false;
  }

  return true;
}

/*
Complexity

Time Complexity: O(∣E∣+∣V∣) where |V|is the number of courses, and |E| is the number of dependencies.

As in the previous algorithm, it would take us |E| time complexity to build a graph in the first step.
Similar with the above postorder DFS traversal, we would visit each vertex and each edge once and only once in the worst case, i.e. |E| + |V|.
As a result, the overall time complexity of the algorithm would be O(2⋅∣E∣+∣V∣)=O(∣E∣+∣V∣).

Space Complexity: O(∣E∣+∣V∣), with the same denotation as in the above time complexity.

We built a graph data structure in the algorithm, which would consume |E| + |V| space.
In addition, we use a container to keep track of the courses that have no prerequisite, and the size of the container would be bounded by |V|.
As a result, the overall space complexity of the algorithm would be O(∣E∣+2⋅∣V∣)=O(∣E∣+∣V∣).
*/