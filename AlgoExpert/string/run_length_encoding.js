function runLengthEncoding(string) {
  // Write your code here.
  let count = 1;
  let output = "";
  string.split("").forEach((letter, idx) => {
    if (letter === string[idx + 1] && count < 9) {
      count++;
    } else {
      output = `${output}${count}${letter}`;
      count = 1;
    }
  });
  return output;
}
