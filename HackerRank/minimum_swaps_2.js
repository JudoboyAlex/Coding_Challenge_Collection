function minimumSwaps(arr) {
  let swapCount = 0;
  for (let index = 0; index < arr.length; index++) {
      const currentInt = arr[index];
      const position = index + 1;
      if (currentInt !== position) {
          let indexToSwap
          for (let i = 0; i < arr.length; i++) {
              if (arr[i] === position) {
                  indexToSwap = i;
                  break
              }
          }
          arr[indexToSwap] = currentInt;
          arr[index] = position;
          swapCount = swapCount + 1;
      }
  }
  return swapCount;
}

console.log(minimumSwaps([2,3,4,1,5]));
