function solution(nums){
    if (nums === null ) {
      return [];
    } else {
      return nums.sort((a,b)=>a-b);
    }
  }

  console.log(solution([1, 2, 10, 50, 5]));
  console.log(solution(null));

// Better Solution#1 
function solution(nums){
    return (nums || []).sort(function(a, b){
      return a - b
    });
  }