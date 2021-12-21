const getRow = rowIndex => {
  const res = []
  
  while (res.length <= rowIndex) {
      res.unshift(1)
      for(let i = 1; i < res.length - 1; i++) {
          res[i] += res[i + 1]
      }
  }
  
  return res
}