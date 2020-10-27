// Solution#1
function fearNotLetter(str) {
  for (var i = 0; i < str.length; i++) {
    /* code of current character */
    var code = str.charCodeAt(i);

    /* if code of current character is not equal to first character + no of iteration
        hence character has been escaped */
    if (code !== str.charCodeAt(0) + i) {
      /* if current character has escaped one character find previous char and return */
      return String.fromCharCode(code - 1);
    }
  }
  return undefined;
}

// test here
fearNotLetter("abce");

// Solution#2
function skippedLetter(str) {
  for (var i = 0; i < str.length - 1; i++) {
      if (str.charCodeAt(i + 1) - str.charCodeAt(i) != 1) {
          return String.fromCharCode(str.charCodeAt(i) + 1);
      }
  }
}

