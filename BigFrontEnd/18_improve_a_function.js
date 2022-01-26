function excludeItems(items, excludes) {
  
  const excludeMap = new Map()
  for (let {k, v} of excludes) {
    if (!excludeMap.has(k)) {
      excludeMap.set(k, new Set())
    }
    excludeMap.get(k).add(v)
  }

  return items.filter(item => {
    return Object.keys(item).every(
      key => !excludeMap.has(key) || !excludeMap.get(key).has(item[key])
    )
  })
}

let items = [
  {color: 'red', type: 'tv', age: 18}, 
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'book', age: 17}
]

const excludes = [ 
  {k: 'color', v: 'silver'}, 
  {k: 'color', v: 'red'}
]

// let items = [
//   {color: 'red', type: 'tv', age: 18}, 
//   {color: 'silver', type: 'phone', age: 20},
//   {color: 'blue', type: 'book', age: 17}
// ] 
// const excludes = [ 
//   {k: 'color', v: 'silver'}, 
//   {k: 'type', v: 'tv'}
// ] 

console.log(excludeItems(items, excludes))