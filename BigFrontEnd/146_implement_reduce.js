/**
 * Reducer is a function which takes 2 paramether => callback and initial value
 * callback function:   can have 4 paramether => accumulator, currentValue, index and array
 * initial value:   1) when initail value is not given, then first item in the array is set as initial value and it assigned to accumulator
 *                  and will skip the first iteration in loop
 *                  2) if the array itself is empty and if initail value is not given,
 *                  then error will be thrown bcz we cant set 1st item of array(undefined) as initialvalue which will then be assined as accumulator
 */

Array.prototype.myReduce = function (callback, initailValue) {
  let arr = this; // array on which reduce function is called
  let argumentsLen = arguments.length; // reduce function argument(callback and initail value)
  if (arr.length === 0 && argumentsLen === 1) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator = argumentsLen === 1 ? arr[0] : initailValue;
  let index = argumentsLen === 1 ? 1 : 0; // since we have used 1st item in the array as accumulator, we need to skip the 1st iteration

  for (let i = index; i < arr.length; i++) {
    accumulator = callback(accumulator, arr[i], i, arr);
  }
  return accumulator;
};
