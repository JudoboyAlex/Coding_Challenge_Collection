/*
Runtime: 288 ms, faster than 5.93% of JavaScript online submissions for Roman to Integer.
Memory Usage: 50.6 MB, less than 5.16% of JavaScript online submissions for Roman to Integer.
*/

const romanToInt = (s) => {
  if (!s || s.length === 0) {
    return 0;
  }

  const map = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);
  let i = s.length - 1;
  let result = map.get(s[i]);

  while (i > 0) {
    const curr = map.get(s[i]);
    const prev = map.get(s[i - 1]);

    if (prev >= curr) {
      result += prev;
    } else {
      result -= prev;
    }

    i--;
  }

  return result;
};

console.log(romanToInt("III"));

// Time: O(1), Space: O(1)

var romanToInt2 = function (s) {
  const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let num = 0;

  for (let i = 0; i < s.length; i++) {
    const curr = map[s[i]],
      next = map[s[i + 1]];
    if (curr < next) num -= curr;
    else num += curr;
  }
  return num;
};
