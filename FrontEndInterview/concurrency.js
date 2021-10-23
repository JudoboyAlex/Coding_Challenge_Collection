// https://medium.com/@griffinmichl/asynchronous-javascript-queue-920828f6327
function queue(concurrency = 1) {
  let running = 0
  const taskQueue = []

  const runTask = (task) => {
    running++
    task(_ => {
      running--
      if (taskQueue.length > 0) {
        runTask(taskQueue.shift())
      }
    })
  }

  const enqueueTask = task => taskQueue.push(task)

  return {
    push: task =>
      running < concurrency ? runTask(task) : enqueueTask(task),
  }
}

const task1 = done => setTimeout(_ => {console.log('1'); done()}, 100)
const task2 = done => setTimeout(_ => {console.log('2'); done()}, 50)
const task3 = done => setTimeout(_ => {console.log('3'); done()}, 25)

console.log('concurrency of 1')
const taskRunner1 = queue(1)

taskRunner1.push(task1)
taskRunner1.push(task2)
taskRunner1.push(task3)
// 1
// 2
// 3
setTimeout(_ => {
 console.log('concurrency of 2')
 const taskRunner2 = queue(2)

  taskRunner2.push(task1)
  taskRunner2.push(task2)
  taskRunner2.push(task3)
  // 2
  // 3
  // 1 
  
}, 300)
