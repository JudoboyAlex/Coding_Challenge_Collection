function firstBadVersion(isBad) {
  // firstBadVersion receive a check function isBad
  // and should return a closure which accepts a version number(integer)
  return (version) => {
    let start = 0;
    let end = version;
    
    while(start <= end) {
      const mid = Math.floor((start+end)/2);
      if(isBad(mid)) {
        end = mid -1;
      } else {
        start = mid + 1;
      }
    }
    return start <= version ? start : -1;
  }
}

// Time: O(log(N))