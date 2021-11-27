// 5 5 5 5 5
for (var i = 0; i < 5; i++) {
  setTimeout(() => console.log(i), 0);
}


// Solution #1
function printWithDelay(value) {
  setTimeout(() => console.log(value), 0);
}

for (var i = 0; i < 10; i++) {
  printWithDelay(i);
}

// Solution #2
for (let i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}

