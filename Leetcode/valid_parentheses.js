// Runtime: 92 ms, faster than 17.71% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 39.6 MB, less than 28.12% of JavaScript online submissions for Valid Parentheses.
var isValid = function(s) {
  let map = {
      ")": "(",
      "]": "[",
      "}": "{"
  }
  let arr = [];
  for(let i = 0; i < s.length; i ++){
      if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
          arr.push(s[i]);
      }
      else{
          if(arr[arr.length - 1] === map[s[i]]){
              arr.pop();
          }
          else return false;
      }
  }
  return arr.length === 0 ? true : false;
};

// Runtime: 68 ms, faster than 98.86% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 38.5 MB, less than 85.02% of JavaScript online submissions for Valid Parentheses.
var isValid = function(s) {
  let mapLeft = {
      '{' : 1,
      '[' : 2,
      '(' : 3
  },
      mapRight = {
          '}' : 1,
          ']' : 2,
          ')' : 3
      };
  let stack = [];
  for(let i = 0; i < s.length; ++i) {
      if(mapLeft[s[i]]) {
          stack.push(s[i])
      } else if(!stack.length || mapRight[s[i]] != mapLeft[stack.pop()])
          return false;
  }
  return stack.length ? false : true;
};

// Runtime: 92 ms, faster than 17.71% of JavaScript online submissions for Valid Parentheses.
// Memory Usage: 40.2 MB, less than 17.20% of JavaScript online submissions for Valid Parentheses.
const isValid = (s) => {
	let stack = [];

	for (var i = 0; i <= s.length - 1; i++) {
    let ch = s[i];

		if (ch === '(') {
			stack.push(ch);
		} else if (ch === ')') {
      console.log(stack[stack.length - 1]);
			if (stack[stack.length - 1] !== '(') return false;
			stack.pop();
		} else if (ch === '[') {
			stack.push(ch);
		} else if (ch === ']') {
			if (stack[stack.length - 1] !== '[') return false;
			stack.pop();
		} else if (ch === '{') {
			stack.push(ch);
		} else if (ch === '}') {
			if (stack[stack.length - 1] !== '{') return false;
			stack.pop();
		}
	}

	if (stack.length !== 0) return false;
	return true;
};

console.log(isValid("()[]{}"));
console.log(isValid("{[]}"));