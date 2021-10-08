function returnNthCat(n){
  const state = {
     cats : [
        {catId : 1 , name : "tom"},
        {catId : 2 , name : "tiggy"},
        {catId : 3 , name : "leo"},
        {catId : 4 , name : "tommy"}
     ],
     curpage : 3
}

  const { cats: { [n]:thisCat}} = state;
  const {name:thisCatName} = thisCat;

  return thisCatName
}

console.log(returnNthCat(0))