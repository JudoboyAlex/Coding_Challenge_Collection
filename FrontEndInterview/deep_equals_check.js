function deepEquals(a, b) {
  if(Number.isNaN(a) && Number.isNaN(b)) {
      return true;
  }

  if(typeof a !== typeof b) {
      return false;
  }

  if(typeof a !== 'object' || a === null || b === null) {
      return a === b;
  }

  if(Object.keys(a).length !== Object.keys(b).length) {
      return false;
  }

  for(const key in a) {
      if(!deepEquals(a[key], b[key])) {
          return false;   
      }
  }

  return true;
}

// Time: O(N), Space: O(N)