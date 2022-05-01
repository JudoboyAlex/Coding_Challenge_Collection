const isObject = (data) => {
  return typeof data === 'object' && data !== null
}
/**
 * @param {any} data
 * @param {Object} command
 */
function update(data, command) {
  // for simple cases, which $command is in the first layer
  if ('$push' in command) {
    if (!Array.isArray(data)) {
      throw new Error('not array')
    }

    return [...data, ...command['$push']]
  }

  if ('$merge' in command) {
    if (!isObject(data)) {
      throw new Error('not object for $merge')
    }

    return {
      ...data,
      ...command['$merge']
    }
  }

  if ('$apply' in command) {
    return command['$apply'](data)
  }

  if ('$set' in command) {
    return command['$set']
  }

  // for cases with path

  // first shallow copy
  if (!isObject(data)) {
    throw new Error('not object for complex data')
  }

  const newData = Array.isArray(data) ? [...data] : {...data}

  for (const key of Object.keys(command)) {
    newData[key] = update(newData[key], command[key])
  }

  return newData
}
// 1. {$push: array} push() all the items in array on the target.
// const arr = [1, 2, 3, 4]
// const newArr = update(arr, {$push: [5, 6]})
// [1, 2, 3, 4, 5, 6]

// 2. {$set: any} replace the target
const state = {
  a: {
    b: {
      c: 1
    }
  },
  d: 2
}

const newState = update(
  state, 
  {a: {b: { c: {$set: 3}}}}
)
/*
{
  a: {
    b: {
      c: 3
    }
  },
  d: 2
}
*/

//3. {$merge: object} merge object to the location
// const state = {
//   a: {
//     b: {
//       c: 1
//     }
//   },
//   d: 2
// }
// const newState = update(
//   state, 
//   {a: {b: { $merge: {e: 5}}}}
// )
/*
{
  a: {
    b: {
      c: 1,
      e: 5
    }
  },
  d: 2
}
*/

// 4. {$apply: function} custom replacer
const arr = [1, 2, 3, 4]
const newArr = update(arr, {0: {$apply: (item) => item * 2}})
// [2, 2, 3, 4]
console.log(newArr);

// Solution #2- easy to understand solution
function update(data, command) {
  for (const [key, value] of Object.entries(command)) {
    switch (key) {
      case "$push":
        return [...data, ...value];
      case "$set":
        return value;
      case "$merge":
        if (!(data instanceof Object)) {
          throw Error("bad merge");
        }
        return { ...data, ...value };
      case "$apply":
        return value(data);
      default:
        if (data instanceof Array) {
          const res = [...data];
          res[key] = update(data[key], value);
          return res;
        } else {
          return {
            ...data,
            [key]: update(data[key], value),
          };
        }
    }
  }
}