function myQuerySelector(selector){
  const path = selector.split(' ').map(str => str.trim())

  let currentNode = document.body
  while(path.length && currentNode){

    const currentSelector = path.shift()
    let found = false

    for(let node of walkPreOrder(currentNode)){
      if(node.matches(currentSelector)){
        currentNode = node
        found = true
        break
      }
    }

    if(!found) currentNode = null
  }
  return currentNode
}

// USAGE:
const firstRow = myQuerySelector('.container .row:first-child')
