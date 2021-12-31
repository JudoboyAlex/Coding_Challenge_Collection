var fs = require('fs');
var arr = fs.readFileSync('resource.txt').toString().split("\n\n")
let calls = arr[0].split(',').map(Number)
let boards = arr.slice(1).map(parseBoard)

function parseBoard(s){
  let rows = s.split("\n").map(row => (
      {
        progress: 0,
        numbers: row.split(' ').filter(s => s !== '').map(Number)
      }
    )
  )

  let cols = [];
  for(let row of rows){
    let colIndex = 0
    for(let num of row.numbers){
      if(!cols[colIndex]){
          cols[colIndex] = {
          progress: 0,
          numbers: []
        }
      }
      cols[colIndex].numbers.push(num)
      colIndex++
    }
  }
  return {
    rows,
    cols
  }
}

let lastCall;
let marked = new Set();
let wonBoards = new Set();
let lastScore;

const calculateScore = (board, dir) => {
 
  let score = 0;
  if(dir === 'r'){
    for(let row of board.rows){
      for(let num of row.numbers){
        if(!marked.has(num)){
          score += num
        }
      }
    }
  } else if (
    dir === 'c'
  ){
    for(let col of board.cols){
      for(let num of col.numbers){
        if(!marked.has(num)){
          score += num
        }
      }
    }
  }
  return score * lastCall;
}

const playBingo = (calls, boards) => {
  for(let call of calls){
    lastCall = call;
    marked.add(call);
    for(let board of boards){
      for(let row of board.rows){
        for(let num of row.numbers){
          if(num === call){
            row.progress++
            if(row.progress === 5 && !wonBoards.has(board)){
              lastScore = calculateScore(board, 'r')
              wonBoards.add(board);
            }
          }
        }
      }
      for(let col of board.cols){
        for(let num of col.numbers){
          if(num === call){
            col.progress++
            if(col.progress === 5 && !wonBoards.has(board)){
              lastScore = calculateScore(board, 'c')
              wonBoards.add(board);
            }
          }
        }
      }
    }
  }

  return lastScore
}

console.log(playBingo(calls, boards))