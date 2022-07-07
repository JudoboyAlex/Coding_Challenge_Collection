/*
Question: Consider we have multiple async tasks A, B, C, D and E ( not promises). A, B, C are independent tasks while D depends on A and B to perform its task while E depends on D and C to perform its task. Write a task function/class to solve this problem. In the end He asked How to handle concurrency limit ( not to code just asked me to explain my approach ).
*/

/*
You can create a Task class which takes dependency list and actual job as constructor Param.. dependency will be instance of same class Task.. use publish/subscribe pattern so that another process can subscribe to it to get notified when it is completed.. you can keep track of pending dependency task .. once there is no pending dependency task you are good to go to execute your job.. if there is no dependency passed as argument you can simply Execute your job callback
*/

class Task {
  dependencies;
  job;
  currentDependencyCount;
  isCompleted;
  subscribedList;

  constructor(dependencies = [], job) {
    this.dependencies = dependencies
      ? dependencies.filter(
          (dependency) => dependency instanceof Task && !dependency.isCompleted
        )
      : [];
    this.currentDependencyCount = this.dependencies.length;
    this.job = job;
    this.isCompleted = false;
    this.processJob();
    this.subscribedList = [];
  }

  processJob() {
    if (this.dependencies && this.dependencies.length) {
      for (let dependency of this.dependencies) {
        dependency.subscribe(this.trackDependency.bind(this));
      }
    } else {
      this.job(this.done.bind(this));
    }
  }

  trackDependency() {
    this.currentDependencyCount--;
    if (this.currentDependencyCount === 0) {
      this.job(this.done.bind(this));
    }
  }

  subscribe(cb) {
    this.subscribedList.push(cb);
  }

  done() {
    this.isCompleted = true;
    for (const callback of this.subscribedList) {
      callback();
    }
  }
}

const processA = new Task(null, (done) => {
  setTimeout(() => {
    console.log("Process A");
    done();
  }, 100);
});

const processB = new Task(null, (done) => {
  setTimeout(() => {
    console.log("Process B");
    done();
  }, 1500);
});

const processC = new Task(null, (done) => {
  setTimeout(() => {
    console.log("Process C");
    done();
  }, 1000);
});

const processD = new Task([processA, processB], (done) => {
  setTimeout(() => {
    console.log("Process D");
    done();
  }, 1000);
});

const processE = new Task([processC, processD], (done) => {
  setTimeout(() => {
    console.log("Process E");
    done();
  }, 100);
});

const createAllDoneInstance = (allDoneCallback) =>
  new Task([processA, processB, processC, processD, processE], allDoneCallback);

createAllDoneInstance((done) => {
  console.log("All is done!");
  done();
});
