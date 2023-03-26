function extract(str) {
  let start = 0;
  let result = [];

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" &&
      str[i - 1] === "<" &&
      (str[i + 1] === " " || str[i + 1] === ">" || str[i + 1] === "h")
    ) {
      start = i - 1;
    } else if (str[i] === "a" && str[i + 1] === ">") {
      result.push(str.substring(start, i + 2));
    }
  }
  return result;
}
