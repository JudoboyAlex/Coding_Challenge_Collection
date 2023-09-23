// My Solution

var TimeLimitedCache = function() {
   this.cache = {};
   this.timerMap = {}; 
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
  let timer;
  const clearCache = (key) => {
    if(key in this.cache){
      delete this.cache[key];
    }

    if (key in this.timerMap) {
      clearTimeout(this.timerMap[key]);
      delete this.timerMap[key];
    }
    return this.cache;
  }

  if(key in this.cache){
    this.cache[key] = value;
    clearTimeout(this.timerMap[key]);
    this.timerMap[key] = setTimeout(() => {
      clearCache(key);
  }, duration)
    return true;
  } else {
   this.cache[key] = value;

    this.timerMap[key] = setTimeout(() => {
      clearCache(key);
    }, duration)
  }


  return false;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if(key in this.cache){
      return this.cache[key];
    }
    return -1;
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return Object.keys(this.cache).length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */