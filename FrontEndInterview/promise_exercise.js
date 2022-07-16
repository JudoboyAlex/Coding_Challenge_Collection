// https://betterprogramming.pub/what-is-the-microtask-queue-and-how-does-it-work-3b858ff2a270
function waitExample() {
  return async function (dispatch, getState) {
    try {
      await api.task1(); // 1

      setTimeout(async () => {
        await api.task2(); // 3
      }, 5000);

      await api.task3(); // 2
    } catch (error) {
      console.error(error);
    }
  };
}



export function waitExample(){
  return async function (dispatch, getState) {
    try {
      await api.task1(); // 1

      await new Promise((resolve) => {
        setTimeout(async () => {
          await api.task2(); // 2, by wrapping setTimeout in Promise, task2 will enter microTaskQueue
          resolve();
        }, 5000);
      });

      await api.task3(); // 3
    } catch (error) {
      console.error(error);
    }
  };
}