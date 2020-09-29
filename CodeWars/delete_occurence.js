// Was Unable to Solve

function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      
      cache[n] = (cache[n]||0) + 1;
      console.log(cache[n]);
      return cache[n] <= x;
    });
  }

  console.log(deleteNth([1,1,1,1],2));

//   deleteNth ([1,1,1,1],2) // return [1,1]

//   deleteNth ([20,37,20,21],1) // return [20,37,21]