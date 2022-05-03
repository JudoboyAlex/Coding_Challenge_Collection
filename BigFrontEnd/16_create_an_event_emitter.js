class EventEmitter {
  subscritions = {}

  subscribe(eventName, callback) {
      if (!(eventName in this.subscritions)) {
      this.subscritions[eventName] = []
    }

    const callbacks = this.subscritions[eventName]
    callbacks.push(callback)

    return {
      release: () => {
        if (!(eventName in this.subscritions)) {
          return
        }

        const callbacks = this.subscritions[eventName]
        console.log(callbacks);
        const index = callbacks.indexOf(callback)
        if (index < 0) return

        callbacks.splice(index, 1)
        console.log(callbacks);
        if (callbacks.length === 0) {
          delete this.subscritions[eventName]
        }
      }
    }
  }
  
  emit(eventName, ...args) {
      if (!(eventName in this.subscritions)) {
      return
    }

    for (const callback of this.subscritions[eventName]) {
      callback(...args)
    }
  }
}

const myEventEmitter = new EventEmitter();
const handleMyEvent = (data) => {
  console.log('Was fired: ', data);
 };
 const handleMyEvent_two = (data) => {
  console.log('Fired Twice: ', data);
 };
 myEventEmitter.subscribe('testEvent', handleMyEvent);
 let myRelease = myEventEmitter.subscribe('testEvent', handleMyEvent_two);
 myRelease.release()
 myEventEmitter.emit('testEvent', 'hi', "hello");

 // Solution #2 easier to understand solution similar to Grider solution
 // https://www.youtube.com/watch?v=X-AhceP6jpA
 class EventEmitter {
   constructor() {
     this.listeners = {};
   }
   subscribe(eventName, callback) {
     // maintain an array of cb for every event.
     if (this.listeners[eventName]) {
       this.listeners[eventName].push(callback);
     } else {
       this.listeners[eventName] = [callback];
     }
     // bind the retuned object release with current eventName
     return {
       release: () => this.release(eventName, callback),
     };
   }

   release(eventName, callback) {
     // find the index of cb in listeners array for that event and remove it.
     const cbIndex = this.listeners[eventName]?.findIndex(
       (attachedCb) => attachedCb === callback
     );
     this.listeners[eventName]?.splice(cbIndex, 1);
   }

   emit(eventName, ...args) {
     // call all the cb for a particular event from listener array.
     if (this.listeners[eventName]) {
       this.listeners[eventName].forEach((cb) => {
         cb(...args);
       });
     }
   }
 }

 // for catching error, use for loop
 /*
    emit(eventName, ...args) {
     // call all the cb for a particular event from listener array.
     if (this.listeners[eventName]) {
       for(let cb of this.listeners[eventName]) {
          try {
            cb(...args)
          } catch(e){
            throw e;
          }
       }
     }
   }

 */