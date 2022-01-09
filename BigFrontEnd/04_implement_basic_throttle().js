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