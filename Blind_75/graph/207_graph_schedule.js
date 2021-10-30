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

console.log(canFinish(numCourses = 2, prerequisites = [[1,0]])) // true
console.log(canFinish(numCourses = 2, prerequisites = [[1,0],[0,1]])) // false