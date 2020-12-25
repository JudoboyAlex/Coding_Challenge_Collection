//My Solution
const minValue = (values: number[]):number => {
  let arr = values.sort((a,b) => a-b);
  let sets = new Set();
  for( let i of arr ){
    sets.add(i);
  }
  let finalArr = [...sets];
  return +finalArr.join("");
};

//Other Solution#1
const minValue = (values: number[]): number => {
  return Number.parseInt(values.filter((num, index) => values.indexOf(num) == index).sort().join(""));
};

// //Other Solution#2
const minValue = (values: number[]): number => {
  return +([...new Set(values)].sort().join(''))
};

console.log(minValue([4,3,4,6,1]))