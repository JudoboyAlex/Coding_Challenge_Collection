// Unable to understand the question fully, therefore couldn't answer


function countApplesAndOranges(s, t, a, b, apples, oranges) {
    console.log(apples.filter(d => s - a <= d && d <= t - a).length);
    console.log(oranges.filter(d => s - b <= d && d <= t - b).length);
  }

  countApplesAndOranges(7, 11, 5, 15, [-2,2,1], [3,5,-6])