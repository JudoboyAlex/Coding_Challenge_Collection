// https://leetcode.com/discuss/interview-experience/2382223/uber-sr-software-engineerarchitect-frontend-bengaluru-june22-rejected/1533539
// 1]. Problem Solving Round
// Here one problem was given to run only n number of jobs simulataneously. So, one job finishes, pick up next pending job from job pool. It was expected to be written in vanilla JS. 
// I finished in ~35 minutes

// Observable pattern can be applied here. But can also be achieved using simple Promise implementation. Also Proxy can also be used to achieve this.
// Working code should be somewhat similar to this.

const limitConcurrentTasks = function (tasks, limit) {
  let currentActiveTasks = 0;
  let index = 0;

  let successCount = 0;

  let output = [];
  output.length = tasks.length;

  return new Promise((resolve, reject) => {
    const executeTasks = async (currentIndex) => {
      try {
        const response = await tasks[currentIndex];
        output[currentIndex] = response;
        successCount++;
        currentActiveTasks--;

        if (successCount === tasks.length) {
          resolve(output);
          return;
        }

        if (currentActiveTasks < limit && index < tasks.length) {
          executeTasks(index);
          currentActiveTasks++;
          index++;
        }
      } catch (e) {
        reject(e);
      }
    };

    while (currentActiveTasks < limit && index < tasks.length) {
      executeTasks(index);
      currentActiveTasks++;
      index++;
    }
  });
};
