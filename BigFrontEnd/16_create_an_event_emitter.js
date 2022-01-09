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