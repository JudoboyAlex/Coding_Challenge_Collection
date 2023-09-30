//https://www.youtube.com/watch?v=w84-FPJa4_g&t=142s
// Primeagen favourite JS interview question

/*
# Async request queue
hash a queue that returns a promise
hand it a promise factory
when the promise factory is called, the taslk gets executed
limit of 3 tasks running at a time

# Queue
FIFO - First in first out
2 methods - enqueue and dequeue

# Factory
A function that returns a new object or function every time it's called

# Async
Each task should be non-blocking

1. Enqueue a task
2. If limit is below 3, increase the limit by 1 and execute the task
- push the task to our queue
3. Check to see if there is anything on the queue
*/

class AsyncRequestQueue {
    constructor(){
        this.queue = [];
        this.runningTasks = 0;
        this.maxConcurrentTasks = 3;
    }

    enqueue(promiseFactory){
        const task = async () => {
            this.runningTasks++;
            try {
                await promiseFactory();
            } finally {
                this.runningTasks--;
                this.tryToExecute();
            }
        }

        if(this.runningTasks < this.maxConcurrentTasks){
            task();
        } else {
            this.queue.push(task);
        }
    }

    tryToExecute(){
        if(this.queue.length === 0 || this.runningTasks >= this.maxConcurrentTasks){
            return;
        }
        const nextTask = this.queue.shift();
        nextTask();
    }
}

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const q = new AsyncRequestQueue();

function promiseFactory(index){
    return async() => {
        const wait = getRandomNumber(1000, 5000);
        console.log(`Running task ${index} - Waiting for ${wait/ 1000} seconds`);
        await new Promise(r => setTimeout(r, wait));
        console.log(`Finished task ${index}`);
    }
}

q.enqueue(promiseFactory(1));
q.enqueue(promiseFactory(2));
q.enqueue(promiseFactory(3));
q.enqueue(promiseFactory(4));
q.enqueue(promiseFactory(5));
q.enqueue(promiseFactory(6));
q.enqueue(promiseFactory(7));