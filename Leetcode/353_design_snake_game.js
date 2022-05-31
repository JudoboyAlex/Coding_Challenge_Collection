var SnakeGame = function (width, height, food) {
  this.m = height;
  this.n = width;
  this.food = food;
  this.snake = [[0, 0]];
  this.dir = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };
};

SnakeGame.prototype.move = function (direction) {
  let [i, j] = this.dir[direction];
  let x = i + this.snake[0][0];
  let y = j + this.snake[0][1];
  for (let [a, b] of this.snake) {
    if (a === x && b === y) {
      if (
        this.snake[this.snake.length - 1][0] !== a ||
        this.snake[this.snake.length - 1][1] !== b
      )
        return -1;
    }
  }
  if (x < 0 || y < 0 || x >= this.m || y >= this.n) {
    return -1;
  } else {
    this.snake.unshift([x, y]);
    if (
      this.food.length > 0 &&
      x === this.food[0][0] &&
      y === this.food[0][1]
    ) {
      this.food.shift();
    } else {
      this.snake.pop();
    }
    return this.snake.length - 1;
  }
};
