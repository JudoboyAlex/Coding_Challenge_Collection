var fs = require('fs');
var arr = fs.readFileSync('resource.txt').toString().split(",").map(Number)

// let arr = [16,1,2,0,4,2,7,1,2,14]

const efficientSort = (positions) => {
  let min;
  let max;
  for(pos of positions){
    if(min === undefined || pos < min){
      min = pos;
    }
    if(max === undefined || pos > max){
      max = pos;
    }
    console.log(min,max)
  }

  function calculateScore(candidate){
    let score = 0;
    for(num of positions){
      let distance = Math.abs(num-candidate)
      let cost = distance * (distance + 1) / 2
      score += cost
    }
    return score;
  }
  let minScore;
  let minCandidate;
  for( candidate = min; candidate <= max; candidate++){
    let score = calculateScore(candidate);
    if( minScore === undefined || score < minScore){
      minScore = score
      minCandidate = candidate;
    }
  }
  return `Score for ${minCandidate} is ${minScore}`;
}

console.log(efficientSort(arr))