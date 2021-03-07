//Found this challenge from Twitter

const dupeArray = (array, num) => {
  let arr = [];
  let count = 0;
  while( count < num ){
    for(let i = 0; i < array.length; i++){
      arr.push(array[i])
    }
    count++;
  } 
  return [...array, ...arr];
}

console.log(dupeArray([1,2,3],3))