var join = function (arr1, arr2) {
  const map = new Map();
  for (const obj of arr1) map.set(obj.id, obj);
  for (const obj of arr2) {
    if (!map.has(obj.id)) map.set(obj.id, obj);
    else {
      const prevObj = map.get(obj.id);
      for (const key of Object.keys(obj)) prevObj[key] = obj[key];
    }
  }
  const res = new Array();
  for (let key of map.keys()) res.push(map.get(key));
  return res.sort((a, b) => a.id - b.id);
};

/*
Complexity Analysis:

Time complexity: 
The time complexity is O(nlogn) due to the sort function, 
where nnn is the total number of elements in the combined array 
(length of arr1 plus length of arr2). The iteration and merging process also 
contributes to the time complexity, but it is dominated by the sorting operation.

Space complexity: 
The space complexity is O(n), where nnn is the total number of elements 
in the map.
*/
