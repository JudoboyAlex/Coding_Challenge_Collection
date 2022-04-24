function throttle(func, wait) {
  let waiting = false, lastArgs = null;
  return function(...args){
    if(!waiting){
      func.apply(this, args)
      waiting = true;
      let timeout = () => setTimeout(() => {
        waiting = false;
        if(lastArgs){
          func.apply(this, lastArgs);
          lastArgs = null;
        }
      }, wait);
      timeout();
    }
    else 
      lastArgs = args
  }
}

// Solution#2
function throttle(func, wait) {
  let cooling = false;
  let lastArg;
  return function(...args) {
    if (cooling) {
      // we need to store the last args because when time's up,
      // cooling flag is still false, and we don't want miss this last args
      lastArg = args;
    } else {
      func.apply(this, args); //initial run
      cooling = true;
      setTimeout(() => {
        //when wait time's up
        cooling = false;
        if (lastArg) {
          //if there's any run left, run it
          func.apply(this, lastArg);
        }
      }, wait);
    }
  };
}
