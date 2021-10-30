function get(data, str) {
  var queue = [];
  var result = data;
  var key  = '';

  Array.from(str).forEach(function(char, i) {        
      if (
          char == '[' || 
          char == ']'|| 
          char == '.' 
      ) {
          if (key.length > 0) {
              queue.push(key)
          }    
          key = '';
      } else if (i === str.length-1) {
        key += char;
        queue.push(key);    
        key = '';
      } else {
          key +=char;
      }

  })

  queue.forEach(function(k){
      result = result[k];
  })

  console.log(result);
}

get({ developer: "Software Engineer" }, "developer"); // => 'Software Engineer'
get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName"); //=>'Cruz
get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"); //=>0
get([{ developer: "Tom" }, [0, null]], "[1][1]"); //=>null