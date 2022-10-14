function highlightKeywords(html, keywords) {
  // Use an array to store indexes that need to be bolded
  let bold = new Array(html.length).fill(false);

  for (let i = 0, end = 0; i < html.length; i++) {
    for (let word of keywords) {
      // Does word start at index i of html string?
      if (html.startsWith(word, i)) {
        // update end of the interval
        end = Math.max(end, i + word.length);
      }
    }
    // mark all indexes within the interval with 'true'
    bold[i] = end > i;
  }

  let res = "";
  for (let i = 0; i < html.length; i++) {
    if (!bold[i]) {
      res += html.charAt(i);
      continue;
    }
    // two pointers for bold interval
    let j = i;
    while (j < html.length && bold[j]) {
      j++;
    }
    res += "<em>" + html.substring(i, j) + "</em>";
    i = j - 1;
  }
  return res;
}

console.log(
  highlightKeywords("Hello FrontEnd Lovers", [
    "Front",
    "FrontEnd",
    "JavaScript",
  ])
);
