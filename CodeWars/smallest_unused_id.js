// This is my failed solution
function nextId(ids){
    let sortedArr = ids.sort((a,b) => a-b)
    for ( let i=0; i < sortedArr.length; i++){
        if(sortedArr[i+1] != sortedArr[i] + 1){
            return sortedArr[i]+1
        } else {
            return sortedArr[sortedArr.length-1]+1
        }
    }
  }

console.log(nextId([4,1,0,2,5]));
// console.log(nextId([0,1,2,3,4,5,6,7,8,9,10]));


//   describe('method: nextId', function() {
//     it('returns the lowestNextId', function() {
//       Test.assertEquals(nextId([0,1,2,3,5]), 4);
//     });
//     it('returns the lowestNextId', function() {
//       Test.assertEquals(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
//     });
//   });

// Other top solution
function nextId(ids){
    const used = new Set(ids);
    // console.log(used)
    for (let i = 0; i <= ids.length; i++) {
      if (!used.has(i)) return i;
    }
  }

  function nextId(ids){
    var x = 0;
    while (ids.includes(x)) x++;
    return x;
  }