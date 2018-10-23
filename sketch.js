let player;
let enemy;
let game;
let width= 600;
let height= 400;

function setup() {
  createCanvas(600,400);
  game = new Game();
}

function draw() {
  background(40);
  game.update();
  game.show();
}

function mousePressed(){
  game.mousePressed(mouseButton);
}
