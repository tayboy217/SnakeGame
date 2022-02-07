// キャンバスを用意
// 蛇を用意
// 蛇を動かす
// 果物を用意
// 蛇が果物を食べる
// 果物が動く
// 蛇が大きくなる
// ゲーム終了

let snake;
const size  = 30;

function setup() {
  createCanvas(600, 600);
  snake = new Snake();
}

function draw() {
  background('gray');
  snake.show();
}

class Snake {
  constructor() {
    this.body = createVector(0, 0);
  }

  show() {
    fill('black');
      rect(body.x, body.y, size, size);
  }
}